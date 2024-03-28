const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");

  describe('Ysojs - 3 easy testcases', function () {
    let driver;
    
    before(async function () {
      driver = await new Builder().forBrowser('chrome').build();
    });
    
    it('First Selenium script with mocha', async function () {
      await driver.get('http://localhost:4200/');
      
    // 5 easy test cases

      // Title
      let title = await driver.getTitle();
      assert.equal("Yso App", title);
      console.log(title);
      await driver.manage().setTimeouts({implicit: 500});
  
      // Check a navigation link
      target = 'SHOP'
      let navLink = await driver.findElement(By.linkText(target)).then(function(element) {
        return element;
      });
        await navLink.click();
      
      // Check the URL 
      target = '/api';
      let url = await driver.getCurrentUrl().then(function(url){ return url });
      console.log(url)
      assert.ok(url.endsWith(target));

      // Find the button
      let btn = await driver.findElement(By.id("test")).then(function(element){return element});
      await btn.click();
  
      // Check the response
      let response = await driver.findElements(By.className("response")).then(function(element){return element[0].getText()} );
      assert.equal(response, 'BTH jsramverk sample production');

      // Go back and check the url
      await driver.navigate().back();

      // Check url again 
      currentUrl = await driver.getCurrentUrl();
      console.log(currentUrl);

    
    });
  
    after(async () => await driver.quit());
  });