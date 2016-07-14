//var HtmlReporter=require('protractor-html-screenshot-reporter');
exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['spec.js'],

  // onPrepare:function(){
  //   jasmine.getEnv().addReporter(new HtmlReporter({
  //     baseDirectory:"./screenshots"
  //
  //   }));
  // };



};
