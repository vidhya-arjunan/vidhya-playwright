/* JavaScript Functions

Learning Objective:
Understand different ways to declare functions in JavaScript and how to use callback
functions.

Assignment Details:
Complete the following tasks to practice function declarations, arrow functions, anonymous
functions, and callback functions in JavaScript.

Assignment Requirements:
Task 1: Function Declaration
Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello,
<name>!" to the console.
Task 2: Arrow Function
Create an arrow function named `double` that takes a number as a parameter and returns
double its value.
Task 3: Anonymous Function
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
after 2 seconds.
Task 4: Callback Function
Create a function named `getUserData` that takes a callback function as a parameter. Inside
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function
with a user object after 3 seconds.
Call the `getUserData` function and log the user's name and age using the callback function.
 */

// Named Function Declaration
function userProfile(name){
    return("Hello " + name)
}
console.log(userProfile("vidhya"))

//Arrow function
let double = (input) => input*2;
console.log(double(4));

//Anonymous function
setTimeout((input)=>{
    console.log("The message is delayed by 2 secs." + input + " is printed" )
},2000,"vidhya");

//Callback
function getUserData(callback){
    console.log("Fetching user data, may take 2 secs");
    setTimeout(()=>{
        let userName = "Aa"
        let userAge = 3
        callback(userName, userAge)
    },2000)
}
function printDetails(name, age){
console.log("User Name: " + name)
console.log("User Age: " + age)
}
getUserData(printDetails);