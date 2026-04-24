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
 
Assignment: 1 Create a Lead 
1. Navigate to the url http://leaftaps.com/opentaps/control/main 
2. Enter the username as ‘Demosalesmanager’ 
3. Enter the password as ‘crmsfa’ 
4. Click the Login button 
5. Click CRM/SFA 
6. Click Leads 
7. Click Create Lead 
8. Fill the Company Name 
9. Fill the First Name 
10. Fill the Last Name 
11. Fill the Salutation 
12. Fill the Title 
13. Fill the Annual Revenue 
14. Fill the Department 
15. Fill the Phone number 
16. Click Create Lead button 
17. Verify the company name, first name, last name and the status using auto retrying and non
retrying assertions  */

import { test, expect } from '@playwright/test'

test("create lead", async ({ page }) => {

    //logging in 
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.getByLabel("Username").fill("Demosalesmanager");
    await page.getByLabel("Password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.getByRole("link", { name: "CRM/SFA" }).click();

    //clicking create lead
    await page.getByRole("link", { name: "Create Lead" }).click();

    //filling create lead form
    await page.locator(`form[name = "createLeadForm"] #createLeadForm_companyName`).fill("Galaxy");
    await page.locator(`form[name = "createLeadForm"] #createLeadForm_firstName`).fill("Maha");
    await page.locator(`form[name = "createLeadForm"] #createLeadForm_lastName`).fill("Adhiran");
    await page.locator(`form[name = "createLeadForm"] #createLeadForm_personalTitle`).fill("Mr.");
    await page.locator(`form[name = "createLeadForm"] #createLeadForm_generalProfTitle`).fill("CEO");
    await page.locator(`form[name = "createLeadForm"] #createLeadForm_annualRevenue`).fill("2000000");
    await page.selectOption("#createLeadForm_currencyUomId", { label: "INR - Indian Rupee" });
    await page.locator(`form[name = "createLeadForm"] #createLeadForm_departmentName`).fill("IT");
    await page.locator(`form[name = "createLeadForm"] #createLeadForm_primaryPhoneNumber`).fill("7890123456");
    await page.locator(`form[name = "createLeadForm"] #createLeadForm_primaryPhoneCountryCode`).fill("+91");
    await page.locator(`form[name = "createLeadForm"] [name = "submitButton"]`).click();

    //auto retry assertion
    await expect(page.locator(`form[name = "viewLead"] #viewLead_companyName_sp`)).toHaveText(/Galaxy/);
    await expect(page.locator(`form[name = "viewLead"] #viewLead_firstName_sp`)).toHaveText("Maha");
    await expect(page.locator(`form[name = "viewLead"] #viewLead_lastName_sp`)).toHaveText("Adhiran");
    await expect(page.locator(`form[name = "viewLead"] #viewLead_personalTitle_sp`)).toHaveText("Mr.");
    await expect(page.locator(`form[name = "viewLead"] #viewLead_generalProfTitle_sp`)).toHaveText("CEO");
    await expect(page.locator(`form[name = "viewLead"] #viewLead_annualRevenue_sp`)).toHaveText(/2,000,000/);   //check if there is a better way
    await expect(page.locator(`form[name = "viewLead"] #viewLead_annualRevenue_sp`)).toHaveText(/^Rs/);
    await expect(page.locator(`form[name = "viewLead"] #viewLead_departmentName_sp`)).toHaveText("IT");
    await expect(page.locator(`td:has(b:text("Phone Number")) + td .tabletext`)).toHaveText(/7890123456/);

    //no auto retry assertion
    let company = await page.locator(`form[name = "viewLead"] #viewLead_companyName_sp`).innerText();
    expect(company).toContain("Galaxy");
    let firstName = await page.locator(`form[name = "viewLead"] #viewLead_firstName_sp`).innerText();
    expect(firstName).toBe("Maha");
    let lastName = await page.locator(`form[name = "viewLead"] #viewLead_lastName_sp`).innerText();
    expect(lastName).toBe("Adhiran");
    let salutation = await page.locator(`form[name = "viewLead"] #viewLead_personalTitle_sp`).innerText();
    expect(salutation).toBe("Mr.");
    let title = await page.locator(`form[name = "viewLead"] #viewLead_generalProfTitle_sp`).innerText();
    expect(title).toBe("CEO");
    let annualRevenue = await page.locator(`form[name = "viewLead"] #viewLead_annualRevenue_sp`).innerText();
    expect(annualRevenue).toContain("2,000,000");                                                               //check if there is a better way
    let department = await page.locator(`form[name = "viewLead"] #viewLead_departmentName_sp`).innerText();
    expect(department).toBe("IT");
    let phoneNumber = await page.locator(`td:has(b:text("Phone Number")) + td .tabletext`).innerText();
    expect(phoneNumber).toContain("7890123456");

});