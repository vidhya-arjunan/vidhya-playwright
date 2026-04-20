/* https://www.leafground.com/window.xhtml
click on the Open button
get the title of both the pages
enter the email in the dashboard page(opened new page) */

import {test} from '@playwright/test'

test("windows handling", async ({page}) => {

    await page.goto("https://leafground.com/window.xhtml");
       console.log(await page.title());

       const pageRef = page.waitForEvent('popup')
       page.locator(".ui-button-text.ui-c").filter({hasText: "Open"}).click();

    /* await page.locator("button#englishBtn").click()
    await page.locator("//span[text()='Login']").click() 

   // context.waitForEvent('page')//context level

   const pageRef= page.waitForEvent('popup') //pagelevel  //event
    page.locator("//a[text()=' Internet Banking Personal Login']").click() //trigger the even
    const newTab=await pageRef //resolving promise
   console.log(await newTab.title())
   await newTab.locator("#loginsubmit_loginId").fill("ryworehyi")
   await newTab.waitForTimeout(2000)
   await page.locator("//i[contains(@class,'bi-person-circle me-1')]").click()
   await page.bringToFront()
    await newTab.waitForTimeout(2000)
   await newTab.bringToFront()
   await newTab.waitForTimeout(2000) */
})

