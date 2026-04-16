// Modified same code from four-functions.js to resolve async issues and data flow from one function to another.
// Sequential flow LoginUser -> getProfile -> getOrders -> showSummary 
// Data flows from one function to next

function loginUser(userName, password, successcallback, errorcallback) {   //without callback in else loop, main function won't work, so having two callbacks
    console.log("Attempting login");
    setTimeout(() => {
        if (userName === "vidhya" && password === "123") {
            console.log("Login Successful");
            let userName_userID = "User123";    //let's assume we got this userID from some API call
            successcallback(userName_userID);
        }
        else {
            errorcallback(new Error("Invalid User"));
        }
    }, 3000);
    console.log("lemme load other things while it checks login");

}
function getUserProfileID(userID, callback) {
    console.log("Here is the User Profile of " + userID);
    callback(userID)
}
function getUserOrders(userID, callback) {
    console.log("The user " + userID + " has purchased these items");
    callback(userID)
}
function showSummary(userID) {
    console.log("A quick summary of the user " + userID);
}


loginUser("vidhya", "12",                                       //3rd paramater for positive callback, 4th for negative callback
    (userID) => {
        getUserProfileID(userID, (userID) => {
            getUserOrders(userID, (userID) => {
                showSummary(userID)
            })
        })
    },
    (error) => {
        console.log(error.message)                            //if try catch, it behaves as 2 different code. so if try is delayed, catch executes before even error thrown. so handled manually.
    });
