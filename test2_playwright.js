const playwright = require("playwright");

(async function(){
  const browser = await playwright.chromium.launch({ headless: false }); // Non-headless mode to feel comfy
  const context = await browser.newContext(); // So much to say, but another time
  const page = await context.newPage(); // Create a new Page instance which handles most of your needs

  await page.goto("https://www.amazon.in"); // Navigate to the Playwright webpage

  //await page.waitForTimeout(5000); // Rest your eyes for five seconds
 
  await page.click('text="Hello, Sign in"');
  await page.click('//*[@id="continue"]');
  await page.isVisible('text="Enter your email or mobile phone number"')
  //await page.pause();
})();