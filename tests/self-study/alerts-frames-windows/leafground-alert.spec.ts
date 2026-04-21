import { test } from '@playwright/test'
test("handling alerts", async ({ page }) => {
    await page.goto("https://www.leafground.com/alert.xhtml");


    /*   const count = await page
          .getByRole("heading", { name: "Alert (Simple Dialog)" })
          .count();
  
      console.log(count); */

    page.on('dialog', alertFired => {
        if (alertFired.type() === "alert")
            alertFired.accept();
        else if (alertFired.type() === "confirm")
            alertFired.accept();
        else if (alertFired.type() === "prompt")
            alertFired.accept("Vidhya");
    });

    await page.locator(".card").
        filter({ has: page.getByRole("heading", { name: /^Alert \(Simple Dialog\)$/ }) })
        .getByRole("button", { name: "Show" })
        .click();

    console.log(await page.locator(".card").
        filter({ has: page.getByRole("heading", { name: /^Alert \(Simple Dialog\)$/ }) })
        .locator("#simple_result").innerText());



        
}); 