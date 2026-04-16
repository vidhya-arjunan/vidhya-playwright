import test from "@playwright/test";

test('drop down', async ({page}) => {

await page.goto("https://www.leafground.com/select.xhtml");
await page.selectOption(".ui-selectonemenu", { label:"Playwright" });
await page.waitForTimeout(2000)
await page.selectOption(".ui-selectonemenu", { index : 4 });
await page.waitForTimeout(2000);
const count=await page.locator("select.ui-selectonemenu option").count()
console.log(count)
});