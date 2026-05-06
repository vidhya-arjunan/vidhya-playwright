import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from "path"

let loginData:any[]
loginData=parse(fs.readFileSync(path.join(__dirname, '../../../../data/credentials.csv')),{
     columns:true,
     skip_empty_lines:true,
})


// test('Reading CSv file',async()=>{
//     console.log(loginData)
// })

for(let data of loginData){
test(`Learning CSV Parameterization role ${data.role}`,async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill(data.username)
    await page.locator("#password").fill(data.password)
    await page.locator(".decorativeSubmit").click()
})
    }