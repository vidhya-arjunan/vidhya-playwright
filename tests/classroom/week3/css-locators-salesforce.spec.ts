import test from "@playwright/test";

test('Login', async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale=ca")

     //to locate element in the webpage and type into it
     await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
     //locator("id=username")
     await page.locator("id=password").fill("Testleaf@2025")

     //click a button
     await page.locator("#Login").click()

     //pause the execution
     await page.waitForTimeout(3000)
}) ;   
    
