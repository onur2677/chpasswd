const { chpasswd, chpasswdSync } = require('../index')
const password = require('./password')

chpasswd(password.old, password.new, function (error) {
  if (error) {
    console.log('Error ! ', error)
  } else {
    console.log('Success !')
  }
})

var result = chpasswdSync(password.old, password.new)
console.log(result ? 'Success !' : 'Error !')
