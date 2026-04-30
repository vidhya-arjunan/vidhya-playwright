import {test , expect} from '@playwright/test'
import path from "path";

test("file upload with input tag", async({page}) => {

    await page.goto("https://the-internet.herokuapp.com/upload");
    let uploadButton = page.locator("#file-upload")
    const filePath = path.join(__dirname, '../../../Data/image1.jpeg');
    await uploadButton.setInputFiles(filePath);
    await page.waitForTimeout(3000);
    //await expect(page.locator("#file-upload")).toHaveText(/image1/) 

});