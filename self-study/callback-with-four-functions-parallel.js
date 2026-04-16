// Modified same code from four-functions.js to do the order correct 
// Login User -> (getProfile + getOrders + showSummary)

function loginUser(userName, password, callback) {
    console.log("Attempting login");
    setTimeout(() => {
        if (userName === "vidhya" && password === "123") {
            console.log("Login Successful");
            let userName_userID = "User123";    //let's assume we got this userID from some API call
            callback(userName_userID)
        }
        else {
            console.log("Invalid User");
        }
    }, 3000);
}
function getUserProfileID(userID) {
    console.log("Here is the User Profile of " + userID);
}

function getUserOrders(userID) {
    console.log("The user " + userID + " has purchased these items");
}

function showSummary(userID) {
    console.log("A quick summary of the user " + userID);
}

//login -> (getProfile + Orders + Summary) all at once flow

loginUser("vidhya", "123", (userID) => {
    getUserProfileID(userID);
    getUserOrders(userID)
    showSummary(userID)
})

console.log("lemme load other things while it checks login");
