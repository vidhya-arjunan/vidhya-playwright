import test from "@playwright/test";
import 'dotenv/config'

test('playwright locators', async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
 
    //logging in
    await page.getByLabel("Username").fill(process.env.LT_USERNAME!);
    await page.getByLabel("Password").fill(process.env.LT_PASSWORD!);
    await page.locator(".decorativeSubmit").click();
});