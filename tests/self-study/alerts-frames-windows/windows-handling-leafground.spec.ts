
import { test, Page } from '@playwright/test'

test("multiple windows", async ({ page }) => {

    await page.goto("https://www.leafground.com/window.xhtml");

    let tabs: Page[] = [];
    page.on("popup", (newTab) => {
        tabs.push(newTab);
    });

    await page.getByRole("button", { name: "Open Multiple" }).click();
    await page.waitForTimeout(2000)
    /* console.log(await tabs[0].title())  // await here! title() is async
    console.log(await tabs[1].title())  */
    console.log(tabs.length);

    for (const tab of tabs) {
        if (await tab.title() === "Dashboard") {
            console.log(await tab.title());
        }
        else {
            //await tab.waitForLoadState('networkidle')  // wait for ALL network calls to finish!
            console.log("Entering inside " + await tab.title());
            console.log(await tab.url())
            await tab.getByPlaceholder("Search", { exact: true }).fill("Vidhya");
        }
    }

});

test.only("single window", async ({ page }) => {
    console.log("here");
    await page.goto("https://www.leafground.com/window.xhtml");
    const newWindowPromise = page.waitForEvent("popup")
    await page.getByText("Open", {exact: true}).click();
    const newTab = await newWindowPromise;
    console.log(await page.title());
    await newTab.waitForLoadState('load');
    console.log(await newTab.title());
});