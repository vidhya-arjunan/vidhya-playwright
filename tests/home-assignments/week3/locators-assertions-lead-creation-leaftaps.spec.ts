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

import { test } from '@playwright/test'

test("create lead", async ({ page }) => {

    //logging in 
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.getByLabel("Username").fill("Demosalesmanager");
    await page.getByLabel("Password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.getByRole("link", { name: "CRM/SFA" }).click();

    //clicking create lead
    await page.getByRole("link", {name: "Create Lead"}).click();

    //filling create lead form
    await page.locator(`form[name="createLeadForm"] #createLeadForm_companyName`).fill("abcd");
        
    await page.pause();
    
});