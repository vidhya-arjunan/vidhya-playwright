
import {test} from '@playwright/test'

test("Storage State for Salesforce", async ({page}) => {

await page.goto("https://login.salesforce.com/")
await page.getByLabel("Username").fill("vidhya.vijaykumar2811.62a7706128f7@agentforce.com");
await page.getByLabel("Password").fill("Jil1jung@");
await page.locator("#Login").click();
await page.waitForTimeout(20000);
await page.waitForLoadState("load");
await page.context().storageState({path: "utils/storageInfoSalesforce.json"});

});