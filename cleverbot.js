const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.cleverbot.com/');
  await page.evaluate(() => {cleverbot.sendAI("hi there");})
  const feedHandle = await page.$('.bot');
 setTimeout(async function() {
 console.log(await feedHandle.innerText);
 },5000);

//[document.getElementsByClassName("bot").length -1].innerText



/*
const aHandle = await page.evaluateHandle(() => {
    document.getElementsByClassName("bot")
	});
 setTimeout(async function() { const resultHandle = await page.evaluateHandle(body => document.getElementsByClassName("bot"), aHandle);
  console.log(await resultHandle.jsonValue());
  await resultHandle.dispose();
 },5000)

*/

})();