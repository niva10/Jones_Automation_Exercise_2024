
const puppeteer = require('puppeteer');

async function runAutomation() {

  const browser = await puppeteer.launch({ headless: false }); 
  const page = await browser.newPage();                          
  await page.goto('https://testsite.getjones.com/ExampleForm/');  

  await page.type('#name', 'Niv');
  await page.type('#email', 'niv123@stam.com');
  await page.type('#phone', '0521234567');
  await page.type('#company', 'ABC company');

  await page.select('#employees', '51-500'); 

  await page.screenshot({ path: 'before_click.png' });
  
  await page.click('button[class="primary button"]'); 

  await page.waitForSelector('.copyright')? console.log('Reached the thank you page'): '';

}

runAutomation();





