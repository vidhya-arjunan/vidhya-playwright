import { test } from '@playwright/test'

test("alert", async ({ page }) => {

   await page.goto("https://www.leafground.com/alert.xhtml")
   page.on('dialog', incomingAlert => {

      const incomingAlertType = incomingAlert.type()
      const incomingAlertMessage = incomingAlert.message()

      console.log(`The alert type is ${incomingAlertType} and the message is ${incomingAlertMessage}`)

      if (incomingAlertType === 'prompt') {
         incomingAlert.accept('Vidya');
      }

      else {
         incomingAlert.dismiss()
      }
   })

   //alerts are auto dismissed if you are not handling it -there is no exception

   await page.locator("//span[text()='Show']").first().click()   //simple alert
   await page.locator("//span[text()='Show']").nth(1).click()  //confirm alert
   await page.locator("(//h5[text()=' Alert (Prompt Dialog)']/following::span[text()='Show'])[1]").click() //prompt alert
   await page.locator("//span[text()='Show']").nth(2).click()  //sweet alert
   await page.locator(`//span[text()='Dismiss']`).click() //sweet alert

});

