/*Red Bus and Flipkart in Edge and Firefox Browser Instances 

Learning Objective:
 Learn how to automate basic navigation to two different websites (Red Bus and Flipkart)
in two separate browser instances (Edge and Firefox) using Playwright.

Assignment Details:
Task:
Your task is to launch two separate browser instances using Playwright:
1. Load Red Bus in an Edge browser instance and verify the page title and URL.
2. Load Flipkart in a Firefox browser instance and verify the page title and URL.
Preconditions:
1. Use Playwright to launch Edge and Firefox.
2. Create two separate browser instances.
3. Use the following URLs:
o Red Bus: https://www.redbus.in
o Flipkart: https://www.flipkart.com
Requirements:
 Red Bus (Edge):
o Load the home page and print the page title and current URL.
 Flipkart (Firefox):
o Load the home page and print the page title and current URL.
Hints:
 Use page.title() to retrieve the page title.
 Use page.url() to retrieve the current page URL. */

import { chromium, firefox, test } from "@playwright/test"

test('Red Bus in Edge', async () => {
    const browser = await chromium.launch({ channel: 'msedge' });
    console.log("Browser type: " + browser.browserType().name())
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://platform.testleaf.com/");
    console.log("Page title: " + await page.title());
    console.log("Page URL " + page.url());
    await browser.close();

});

test('Flipkart in Firefox', async () => {
    const browser = await firefox.launch();
    console.log("Browser type: " + browser.browserType().name())
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://www.flipkart.com");
    console.log("Page title: " + await page.title());
    console.log("Page URL: " + page.url());
    await browser.close();
});