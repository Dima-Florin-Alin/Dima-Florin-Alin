var data = require('./data');

var findElement = function(locator, type) {


  switch (type){
    case 'css' :
    return element(by.css(locator));
    break;
    case 'model':
    return element(by.model(locator));
    break;
    case 'xpath' :
    return element(by.xpath(locator));
      break;
    case 'id' :
    return element(by.id(locator));
      break;
    case 'tagName' :
    return element(by.tagName(locator));
    break;
    default:
    throw new Error("this tipe of locator is not defined");
  }

}
var findObject = function(data) {
  return findElement(data.locator, data.type);
}


var checkURL = function(url) {
  return browser.getCurrentUrl().then(function (actualUrl){
    return url == actualUrl;
  });
};
var verifyText = function(data, expectedText){
  return expect(getTextProp(data)).toBe(expectedText);
};

var getTextProp = function(data){
  browser.sleep(5000);
  return findObject(data).getText();
};

module.exports = {
findElement: findElement,
findObject: findObject,
checkURL: checkURL,
verifyText: verifyText,
getTextProp: getTextProp



};
