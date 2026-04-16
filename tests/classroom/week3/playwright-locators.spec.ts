import test from "@playwright/test";

test('playwright locators', async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
 
    //logging in
    await page.getByLabel("Username").fill("demosalesmanager");
    await page.getByLabel("Password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
});