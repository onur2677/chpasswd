const { exec, execSync } = require('child_process')
const username = require('os').userInfo().username
const TIMEOUT = 10000

class Chpasswd {
  static getCmd (oldPassword, newPassword) {
    // const cmd = `echo '${oldPassword}' | sudo -S echo '${oldPassword}\n${newPassword}\n${newPassword}' | sudo passwd`
    const cmd = `echo ${oldPassword} | sudo -S echo '${username}:${newPassword}' | sudo chpasswd`
    return cmd
  }

  /**
 *
 * @param {string} oldPassword Your user's old password
 * @param {string} newPassword Your user's new password
 * @returns {boolean}
 */
  static chpasswdSync (oldPassword, newPassword) {
    const cmd = Chpasswd.getCmd(oldPassword, newPassword)
    try {
      execSync(cmd, { timeout: TIMEOUT, stdio: 'ignore' })
      return true
    } catch (e) {
      console.log('ERROR ', e.message)
      return false
    }
  }

  /**
 *
 * @param {string} oldPassword Your user's old password
 * @param {string} newPassword Your user's new password
 * @callback cb
 * @param error error or sterr or null
 */
  static chpasswd (oldPassword, newPassword, cb) {
    const cmd = Chpasswd.getCmd(oldPassword, newPassword)
    exec(cmd, { timeout: TIMEOUT }, (error, stdout, stderr) => {
      if (error) return cb(error)
      return cb()
    })
  }
}

module.exports = {
  chpasswd: Chpasswd.chpasswd,
  chpasswdSync: Chpasswd.chpasswdSync
}
