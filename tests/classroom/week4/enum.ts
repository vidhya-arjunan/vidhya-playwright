//import {chromium,BrowserContext,Browser,Page} from '@playwright/test'


enum Enivronment{
    qaurl="http://www.google.com/qa",
    stagingUrl="htttp://www.google.com/staging"
}



async function lauchBrowser(url:Enivronment){
         const browser:Browser= await chromium.launch({channel:'chrome'})
          const browserContext:BrowserContext=await browser.newContext()
          const page:Page=await browserContext.newPage()
          await page.goto(url)
}


lauchBrowser(Enivronment.qaurl)
lauchBrowser(Enivronment.stagingUrl)

// npm install --save-dev @types/node

//working code


function loadUrl(url:Enivronment){
    console.log(url)
}



enum Enivronment{
    qaurl="http://www.google.com/qa",
    stagingUrl="htttp://www.google.com/staging"
}


loadUrl(Enivronment.qaurl)
loadUrl(Enivronment.stagingUrl)

//ts-node filename.ts