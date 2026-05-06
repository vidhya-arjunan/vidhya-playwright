import test from "@playwright/test";
import 'dotenv/config';

test('Login', async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale=ca")

     //to locate element in the webpage and type into it
     await page.locator("#username").fill(process.env.SF_USERNAME!)
     //locator("id=username")
     await page.locator("id=password").fill(process.env.SF_PASSWORD!)

     //click a button
     await page.locator("#Login").click()

     //pause the execution
     await page.waitForTimeout(3000)
}) ;   
    
