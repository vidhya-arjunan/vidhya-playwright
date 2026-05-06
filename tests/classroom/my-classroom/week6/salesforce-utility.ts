import { APIRequestContext } from "@playwright/test";
import { faker } from '@faker-js/faker'

// let accToken:any
// let instUrl:any
// let tokenType:any
let Id: any
export async function generateToken(request: APIRequestContext) {
    const response = await request.post(`https://login.salesforce.com/services/oauth2/token`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
       /*  form: {
            "grant_type": grType,
            "client_id": key,
            "client_secret": secret,
            "username": uname,
            "password": pwd
        } */
       form:{
           "grant_type":process.env.SF_GRANTTYPE!,
           "client_id":process.env.SF_CLIENTID!,
           "client_secret":process.env.SF_CLIENTSECRET!,
           "username":process.env.SF_USERNAME!,
           "password":process.env.SF_AUTHPASSWORD!
        }
    })
    const res = await response.json()
    console.log(res)
    return {
        accToken: res.access_token,
        instUrl: res.instance_url,
        tokenType: res.token_type
    }
}

export async function createResource(request: APIRequestContext) {
    const { accToken, instUrl, tokenType } = await generateToken(request)
    console.log(`${accToken}, ${instUrl}, ${tokenType}`)
    const res = await request.post(`${instUrl}/services/data/v66.0/sobjects/Lead`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${tokenType} ${accToken}`
        },
        data: {
            "lastname": faker.person.lastName(),
            "company": faker.company.name()
        }
    })
    const responseBody = await res.json()
    console.log(responseBody)
    Id = responseBody.id
}

export async function FetchResource(request: APIRequestContext) {
    const { accToken, instUrl, tokenType } = await generateToken(request)
    const res = await request.get(`${instUrl}/services/data/v66.0/sobjects/Lead/${Id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${tokenType} ${accToken}`
        },
    })
    const responseBody = await res.json()
    return responseBody.LastName
}

export async function updateResource(request: APIRequestContext) {
    const { accToken, instUrl, tokenType } = await generateToken(request)
    const res = await request.patch(`${instUrl}/services/data/v66.0/sobjects/Lead/${Id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${tokenType} ${accToken}`
        },
        data: {
            "firstname": faker.person.firstName()
        }
    })
    const responseBody = await res.json()
    return responseBody
}