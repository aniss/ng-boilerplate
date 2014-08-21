var chai = require('chai');

describe('angularjs homepage', function() {

  beforeEach(function(){
    isAngularSite(false);
  });

  it("should behave...", function() {
    browser.get('http://google.com');
    var input = element.all(by.tagName("input")).get(2);
    input.sendKeys('Algeria');
    console.log(wait);
  });
});