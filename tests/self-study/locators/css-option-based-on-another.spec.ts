
import {test, expect} from '@playwright/test'

test("Stats Test", async ({page}) => {

    await page.goto("file:///C:/Users/DELL/Downloads/practice-landing.html");
    expect (await page.title()).toBe("TechFlow – Build Faster");
    
    //verifying stats
    await expect(page.locator(`.stat-item`).filter({hasText: "Active Users"}).locator(`.stat-number`)).toHaveText("10,000+");
    await expect(page.locator(`.stat-item`).filter({hasText: "Uptime"}).locator(`.stat-number`)).toHaveText("99.9%");
    await expect(page.locator('.stat-item').filter({hasText: "Avg Response"}).locator(`.stat-number`)).toHaveText("40ms");
    await expect(page.locator(`.stat-item`).filter({hasText: "Integrations"}).locator('.stat-number')).toHaveText("500+");
});