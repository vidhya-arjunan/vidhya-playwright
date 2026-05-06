import { test, expect } from '@playwright/test'

//storage state
test.use({ storageState: "utils/storageInfoSalesforce.json" })
test("Salesforce Create New Account", async ({ page }) => {

    //logged in using storage state & asserting title
    await page.goto("https://orgfarm-e55d725d5b-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome");
    await expect(page).toHaveTitle("Lightning Experience | Salesforce");
    expect(page.url()).toBe("https://orgfarm-e55d725d5b-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome");

    //App Launcher
    await page.locator(`.slds-button.slds-context-bar__button.slds-icon-waffle_container.slds-show[title="App Launcher"]`).click();
    // Wait for the modal AND tiles to load first. And click View All
    await page.locator('one-app-launcher-menu-item').first().waitFor({ state: 'visible' });
    await page.locator('.container lightning-button').getByText("View All").click();

    //selecting Service
    await page.locator("one-app-launcher-modal").getByPlaceholder("Search apps or items...").fill("Service");
    await page.locator("(//lightning-accordion-section//one-app-launcher-app-tile)[1]").click();

    //await page.locator("lightning-accordion-section one-app-launcher-app-tile").filter({hasText: "Service"}).click(); //using CSS & Playwright locators
    await expect(page.locator("one-appnav .appName")).toHaveText("Service");

    //navigating to Acccounts
    await page.locator("one-appnav one-app-nav-bar-item-root").filter({ hasText: "Accounts" }).click();
    await page.locator("lst-list-view-manager-header .slds-breadcrumb").getByRole("heading", { name: "Accounts" }).waitFor();

    //create New Account
    await page.getByRole("button", { name: "New" }).click();
    await page.locator(`lightning-primitive-input-simple input[name="Name"]`).fill("Vijay");
    await page.locator(`//lightning-button/button[text()="Save"]`).click();

    //toast message verification
    expect(await page.locator(`div[data-key="success"]`).innerText()).toContain("created");

}); 