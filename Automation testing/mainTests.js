var data = require('./data');
var utility = require('./utils');

 var test = function() {

      this.loadURL = function(url) {
     browser.get(url);
     browser.sleep(2000);
   }

this.login = function (username, password) {
  var usr = utility.findObject(data.username);
  usr.click();
  usr.clear();
  usr.sendKeys(username);

  var pass = utility.findObject(data.password);
  pass.click();
  pass.clear();
  pass.sendKeys(password);

  var login_btn = utility.findObject(data.loginbtn);
  login_btn.click();
}


this.verify_current_URL = function (url) {
  return browser.wait(function () {
    return utility.checkURL(url);
  },100 * 1000);
};




  this.logout = function() {
    var icon = utility.findObject(data.icon);
    icon.click();
    var log = utility.findObject(data.logout);
    log.click();
  }


this.checkText = function(expectedText){
  utility.verifyText(data.message, expectedText);
};



};


module.exports = test;
