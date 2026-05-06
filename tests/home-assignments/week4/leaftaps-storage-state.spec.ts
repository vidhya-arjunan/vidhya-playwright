import { test, expect } from '@playwright/test'
import 'dotenv/config'

test("Leaftaps Storage Session", async ({ page }) => {

    //logging in 
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.getByLabel("Username").fill(process.env.LT_USERNAME!);
    await page.getByLabel("Password").fill(process.env.LT_PASSWORD!);
    await page.locator(".decorativeSubmit").click();
    await page.getByRole("link", { name: "CRM/SFA" }).click();
    await page.waitForLoadState('load');
    //storing Storage Session
    await page.context().storageState({path:"utils/storageInfoLeaftaps.json"});

});