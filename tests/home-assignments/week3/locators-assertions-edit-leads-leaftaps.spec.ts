/*  Locators & Assertions 
 
Learning Objective: 
Understand how to efficiently select and interact with elements on a web page and to verify using 
auto retrying and non-retrying assertions 
 
Assignment Details: 
Create a test script that navigates to a CRM application, logs in, finds a specific lead by name or 
ID, edits details of the lead (such as name, email, or status), and verifies that the changes have 
been successfully saved. 
 
Precondition: - Use a fixture to setup and teardown 
 
Test Steps: 
 
Assignment: 2 Edit a Lead 
1. Navigate to the url http://leaftaps.com/opentaps/control/main 
2. Enter the username as ‘Demosalesmanager’ 
3. Enter the password as ‘crmsfa’ 
4. Click the Login button 
5. Click CRM/SFA 
6. Click Leads 
7. Click Find Leads 
8. Enter the first name 
9. Click Find Leads button 
10. Click the first resulting Lead ID 
11. Click Edit 
12. Edit Company name 
13. Edit Annual Revenue 
14. Edit Department 
15. Enter Description 

16. Click Update 
17. Verify the edited fields using appropriate assertions  */

import { test, expect } from '@playwright/test'

test.use({ storageState: "utils/storageInfoLeaftaps.json" })
test("create lead", async ({ page }) => {

    //logging in using storage state
    await page.goto("https://leaftaps.com/crmsfa/control/main");

    //finding leads
    await page.locator(`.sectionTabBar`).getByRole("link", { name: "Leads" }).click();
    await page.locator(`.shortcuts`).getByRole("link", { name: "Find Leads" }).click();
    await page.locator(`#findLeads`).getByLabel("First name:").fill("maha");
    await page.locator(`#findLeads`).getByRole("button", { name: "Find Leads" }).click();
    await page.locator(`.x-grid3-cell-inner.x-grid3-col-firstName`).first().getByRole("link").click();

    //navigating to edit lead
    await page.waitForLoadState("load");
    console.log(await page.title());
    await page.locator(`.x-panel-tc:has(.x-panel-header:has-text("Lead")) .subMenuButton`).getByText("Edit").click();

    //editing the lead
    await page.locator(`form#updateLeadForm #updateLeadForm_companyName`).fill("Galaxy_Edit");
    await page.locator(`form#updateLeadForm #updateLeadForm_departmentName`).fill("IT_Edit");
    await page.locator(`form#updateLeadForm #updateLeadForm_annualRevenue`).fill("3,000,000");
    await page.locator(`form#updateLeadForm #updateLeadForm_description`).fill("Edited few details");
    await page.locator(`form#updateLeadForm [name = "submitButton"]`).click();
  
    //auto retry assertion
    await expect(page.locator(`form[name = "viewLead"] #viewLead_companyName_sp`)).toHaveText(/Galaxy_Edit/);
    await expect(page.locator(`form[name = "viewLead"] #viewLead_annualRevenue_sp`)).toHaveText(/3,000,000/);
    await expect(page.locator(`form[name = "viewLead"] #viewLead_departmentName_sp`)).toHaveText("IT_Edit");
    await expect(page.locator(`form[name = "viewLead"] #viewLead_description_sp`)).toHaveText(/edited/i);

});