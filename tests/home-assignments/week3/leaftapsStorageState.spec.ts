import { test, expect } from '@playwright/test'

test("Leaftaps Storage Session", async ({ page }) => {

    //logging in 
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.getByLabel("Username").fill("Demosalesmanager");
    await page.getByLabel("Password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.getByRole("link", { name: "CRM/SFA" }).click();
    await page.waitForLoadState('load');
    //storing Storage Session
    await page.context().storageState({path:"utils/storageInfoLeaftaps.json"});

});