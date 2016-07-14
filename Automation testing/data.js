module.exports = {
  username: {
    locator: 'credentials.username',
    type: 'model'
  },
  password: {
    locator: 'credentials.password',
    type: 'model'
  },
  insertUsername: {
    locator: '[name="simuwattEmail"]',
    type: 'css'
  },
  insertPassword: {
    locator: '[name="simuwattPass"]',
    type: 'css'
  },
  loginbtn: {
    locator: '[ng-click="login()"]',
    type: 'css'
  },
  icon: {
    locator: '[src="./imgs/user_name.png"]',
    type: 'css'
  },
  logout:{
    locator: '[ng-click="logout()"]',
    type: 'css'
  },
  message: {
    locator: '[ng-show="message.show"]',
    type: 'css'
  }

}
