// A normal login workflow with 4 functions. loginUser should give UserID which will be the input of next 3 functions
// But the below flow will not work. As we have time delay in loginUser, the remaining 3 functions get executed, which is not expected

function loginUser(userName, password) {
    setTimeout(() => {
        if (userName === "vidhya" && password === "123") {
            console.log("Login Successful")                   // just printing output here as we can't return in async code
        }
        else {
            console.log("Invalid User")
        }
    }, 3000);
}
function getUserProfileID(userID) {
    console.log("Here is the User Profile of " + userID)
}
function getUserOrders(userID) {
    console.log("The user " + userID + " has purchased these items")
}
function showSummary(userID) {
    console.log("A quick summary of the user " + userID)
}

loginUser("vidhya", "123")
getUserProfileID("vidhya")
getUserOrders("vidhya")
showSummary("vidhya")

// to resolve this dependency of function sequence and the data flow from previous functions, we need to use one of:
// callback, promise, async-await