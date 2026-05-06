
import {test} from '@playwright/test'
import 'dotenv/config'

test("Storage State for Salesforce", async ({page}) => {

await page.goto("https://login.salesforce.com/")
await page.getByLabel("Username").fill(process.env.SF_USERNAME!);
await page.getByLabel("Password").fill(process.env.SF_PASSWORD!);
await page.locator("#Login").click();
await page.waitForTimeout(20000);
await page.waitForLoadState("load");
await page.context().storageState({path: "utils/storageInfoSalesforce.json"});

});