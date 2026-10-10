const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log(`[Browser ${msg.type()}] ${msg.text()}`);
  });
  
  page.on('pageerror', error => {
    console.log(`[Browser Error] ${error.message}`);
  });
  
  await page.goto('http://localhost:3000/blog', { waitUntil: 'networkidle2' });
  await browser.close();
})();
