
const puppeteer = require('puppeteer');

async function runAutomation() {

  const browser = await puppeteer.launch({ headless: false });      // "Headless: false" to see the browser
  const page = await browser.newPage();                            // Opens a new page
  await page.goto('https://testsite.getjones.com/ExampleForm/');  // Navigates to test url

  await page.type('input[name="name"]', 'Niv');
  await page.type('input[name="email"]', 'niv123@Stam.com');
  await page.type('input[name="phone"]', '0521234567');
  await page.type('input[name="company"]', 'ABC company');

  await page.select('select[name="number_of_employees"]', '51-500');  // Bonus

  await page.screenshot({ path: 'before_click.png' });
  
  await page.click('button[class="primary button"]'); 

  await page.waitForSelector('.copyright')? console.log('Reached the thank you page'): '';

  // await browser.close();  
}

runAutomation();



