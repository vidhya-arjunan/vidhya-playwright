import { test, expect } from "@playwright/test";

test.use({ storageState: "utils/storageInfoSalesforce.json" })
test("Salesforce Create Lead", async ({ page }) => {

  //logged in using storage state & asserting title
  await page.goto("https://orgfarm-e55d725d5b-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome");
  await expect(page).toHaveTitle("Lightning Experience | Salesforce");
  expect(page.url()).toBe("https://orgfarm-e55d725d5b-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome");

  // Open App Launcher
await page.locator("one-appnav one-app-launcher-header").getByTitle("App Launcher").click();

// Wait for the modal AND tiles to load first. And click View All
await page.locator('one-app-launcher-menu-item').first().waitFor({ state: 'visible' });
await page.locator('.container lightning-button').getByText("View All").click();

// Now click Sales
await page.locator('one-app-launcher-modal').getByRole('link', { name: 'Sales', exact: true }).click();

//creating lead
await page.locator("one-app-nav-bar one-app-nav-bar-item-root").filter({hasText: "Leads"}).getByRole("link", {name: "Leads"}).click();
await page.locator(".slds-page-header__row").getByRole("button",{name: "New"}).click();

await page.pause();

});