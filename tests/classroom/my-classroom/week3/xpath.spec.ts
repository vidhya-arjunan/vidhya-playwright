import test from "@playwright/test";
import 'dotenv/config'

 test ('xpath locators',async({page}) => {
 
    await page.goto("https://leaftaps.com/opentaps/control/main")
    //id=username
    await page.locator(`//input[@id='username']`).fill(process.env.LT_USERNAME!)
    ////input[contains(@id,'name')]
    await page.locator("//p[@class='top']/input").fill(process.env.LT_PASSWORD!)
 });
 
