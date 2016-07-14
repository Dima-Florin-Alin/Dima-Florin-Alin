var test = require('./mainTests');
var page = new test();




describe('Protractor App', function() {


it('should log in', function(){
    page.loadURL('http://qa.simuwatt.com');
    page.login('florentina.enciu', 'letmein');
    browser.sleep(5000);
})

it('should log out', function(){
  page.logout();
  browser.sleep(5000);
})

it('should show error text', function(){
  page.login();
  page.checkText("The username or password you entered is invalid!");
})

  /*it('should have a title', function(){

    browser.get('http://qa.simuwatt.com');
    browser.sleep(5000);

    expect(browser.getTitle()).toEqual('Simuwatt');
});*/

  //  afterEach (function(){
  //   element(by.css('[src="./imgs/user_name.png"]')).click();
  //   element(by.css('[ng-click="logout()"]')).click();
  // });



//   it('should log in', function(){
//     //navigare pagina
//     browser.get('http://qa.simuwatt.com');
//     //click username
//     element(by.model('credentials.username')).click();
//     //introducere username
//     element(by.css('[name="simuwattEmail"]')).sendKeys('florentina.enciu');
//     //click password
//     element(by.model('credentials.password')).click();
//     //introducere password
//     element(by.css('[name="simuwattPass"]')).sendKeys('letmein');
//     //remember me
//     element(by.model('credentials.rememberme')).click();
//
//     //click login
//     element(by.css('[ng-click="login()"]')).click();
//
//     browser.sleep(5000);
// });



  });
