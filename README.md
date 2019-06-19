# chpasswd

This module changes password with "chpasswd"

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```bash
npm i chpasswd --save
```

### Usage

```js

const { chpasswd, chpasswdSync } = require('../index')
const password = require('./password')

// Async
chpasswd(password.old, password.new, function (error) {
  if (error) {
    console.log('Error ! ', error)
  } else {
    console.log('Success !')
  }
})

// Sync
var result = chpasswdSync(password.old, password.new)
console.log(result ? 'Success !' : 'Error !')
```
