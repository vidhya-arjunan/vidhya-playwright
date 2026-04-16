// Sequential flow LoginUser -> getProfile -> getOrders -> showSummary 
// Data flows from one function to next

function loginUser(userName, password) {
    return new Promise((resolve, reject) => {
        console.log("Attempting login");
        setTimeout(() => {
            if (userName === "vidhya" && password === "123") {
                console.log("Login Successful");
                let userName_userID = "User123";    //let's assume we got this userID from some API call
                resolve(userName_userID);
            }
            else {
                reject(new Error("Invalid User"));
            }
        }, 3000);
        console.log("lemme load other things while it checks login");

    });

}
function getUserProfileID(userID) {
    return new Promise((resolve)=>{
    console.log("Here is the User Profile of " + userID);
    resolve(userID);
    })
}
function getUserOrders(userID) {
    return new Promise ((resolve)=>{
    console.log("The user " + userID + " has purchased these items");
    resolve(userID);
    })
}
function showSummary(userID) {
    console.log("A quick summary of the user " + userID);
    throw new Error("Hehe")
}

loginUser("vidhya","123")
.then(getUserProfileID)
.then(getUserOrders)
.then(showSummary)
.catch((error) => console.log(error.message))    //same logic for callback. if given in try catch, catch executes before try