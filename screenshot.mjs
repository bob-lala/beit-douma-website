import puppeteer from 'puppeteer-core';
import { readdirSync, mkdirSync } from 'node:fs';

const url = process.argv[2] || 'http://localhost:3000';
const mobile = process.argv.includes('--mobile');
const label = process.argv.filter((a, i) => i > 2 && !a.startsWith('--'))[0];
const dir = './temporary screenshots';
mkdirSync(dir, { recursive: true });
const n = readdirSync(dir).filter(f => f.startsWith('screenshot-')).length + 1;
const out = `${dir}/screenshot-${n}${label ? '-' + label : ''}${mobile ? '-mobile' : ''}.png`;

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
});
const page = await browser.newPage();
await page.setViewport(mobile ? { width: 390, height: 844, deviceScaleFactor: 2 } : { width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 45000 });
// scroll through the page so lazy images load, then return to top
await page.evaluate(async () => {
  const step = window.innerHeight / 2;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise(r => setTimeout(r, 90));
  }
  window.scrollTo(0, 0);
});
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log(out);
