const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

//https://www.selenium.dev/documentation/webdriver/getting_started/first_script/

(async function firstTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('http://localhost:4200/');
  
    let title = await driver.getTitle();
    assert.equal("Yso App", title);
    console.log(title);
  
    await driver.manage().setTimeouts({implicit: 500});

    // Get the url
    let currentUrl = await driver.getCurrentUrl();
    console.log(currentUrl);

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

    // Get the response
    let response = await driver.findElements(By.className("response")).then(function(element){return element[0].getText()} );
    console.log(response);
    // let text2 =  await btns[0].getText();

    // Go back 
    await driver.navigate().back();

    // Check url again 
    currentUrl = await driver.getCurrentUrl();
    console.log(currentUrl);


  } catch (e) {
    console.log(e)
  } finally {
    await driver.quit();
  }
}())