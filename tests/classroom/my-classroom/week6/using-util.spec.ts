import test from  '@playwright/test'
import 'dotenv/config'
import { createResource, FetchResource, generateToken } from './salesforce-utility'
let lastname:any

test(`API`,async({request})=>{
 await  createResource(request)
 lastname=await FetchResource(request)
 console.log(lastname)
})

// test(`UI`,async({page})=>{
// //line login, click on view all, leads, search for the lastname
// await page.getByPlaceholder("Search this list...").fill(lastname)
// //await fillSearchbox()
// })

