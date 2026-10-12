const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 667, deviceScaleFactor: 2 });
  
  console.log('Navigating to /blog...');
  await page.goto('http://127.0.0.1:3001/blog', { waitUntil: 'networkidle0' });
  
  const targetHref = await page.evaluate(() => {
    const a = document.querySelector('a[href^="/blog/"]');
    return a ? a.href : null;
  });
  console.log('Found target blog link:', targetHref);
  
  await page.goto(targetHref, { waitUntil: 'networkidle0' });
  console.log('Current page URL:', page.url());
  
  const title = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const body = document.querySelector('.blog-body');
    return {
      h1: h1 ? h1.innerText : null,
      h2: h2 ? h2.innerText : null,
      hasBlogBody: !!body,
      firstParagraph: body ? body.querySelector('p')?.innerText.slice(0, 80) : null
    };
  });
  console.log('Page content info:', title);
  
  await page.screenshot({ path: 'C:/Users/MOHAMMED THALHA A/.gemini/antigravity-ide/brain/8416e4d8-65c1-445f-8f5b-ae01a54eda63/clicked_blog_screenshot.png' });
  console.log('Screenshot saved!');
  await browser.close();
})();
