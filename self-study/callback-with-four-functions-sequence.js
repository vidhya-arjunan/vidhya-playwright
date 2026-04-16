// Modified same code from four-functions.js to resolve async issues and data flow from one function to another.
// Sequential flow LoginUser -> getProfile -> getOrders -> showSummary 
// Data flows from one function to next

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
function getUserProfileID(userID,callback) {
    console.log("Here is the User Profile of " + userID);
    callback(userID)
}
function getUserOrders(userID,callback) {
    console.log("The user " + userID + " has purchased these items");
    callback(userID)
}
function showSummary(userID) {
    console.log("A quick summary of the user " + userID);
}

loginUser("vidhya", "123", (userID)=>{
    getUserProfileID(userID, (userID)=>{
        getUserOrders(userID, (userID)=>{
            showSummary(userID)
        })
    })
});

console.log("lemme load other things while it checks login");
