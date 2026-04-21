
import {test} from '@playwright/test'

test.only ("handling single and multiple windows", async ({page}) => {

await page.goto("https://www.leafground.com/window.xhtml");

let tabs =[];
page.on ("popup", (newTab) => {
    tabs.push(newTab);
});

await page.getByRole("button", {name: "Open Multiple"}).click();
await page.waitForTimeout(2000)  
console.log(await tabs[0].title())  // await here! title() is async
console.log(await tabs[1].title()) 
console.log(tabs.length);

});