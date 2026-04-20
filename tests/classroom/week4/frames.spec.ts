/*c


locate the frame
click on the ele try it
handle the alert
get the text for verification */

import { test } from '@playwright/test'

test("frames", async ({ page }) => {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    //await page.frameLocator("(//iframe)[1]").locator("#Click").click() //nested frame const outerFr= page.frameLocator(`//h5[contains(text(), 'Click Me (Inside Nested frame)')]/following-sibling::iframe`) const innerfr=outerFr.frameLocator('#frame2') await innerfr.locator("#Click").click() })

    await page.frameLocator(`iframe[name="iframeResult"]`)
        .getByRole("button", { name: "Try it" }).click()

    console.log(await page.frameLocator(`iframe[name="iframeResult"]`).locator("#demo").innerText());



    page.on('dialog', alertType => {
        const dialogType = alertType.type()
        const message = alertType.message()
        console.log(`The alert type is ${dialogType} and the message is ${message}`)
        if (dialogType === 'confirm') {
            alertType.accept()
        } else {
            alertType.dismiss()
        }
    })

    await page.frameLocator(`iframe[name="iframeResult"]`)
        .getByRole("button", { name: "Try it" }).click()

            console.log(await page.frameLocator(`iframe[name="iframeResult"]`).locator("#demo").innerText());

});