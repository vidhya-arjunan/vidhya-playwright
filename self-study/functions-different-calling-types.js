//Named Function
let userName = "vidhya"
function greetUser(name) {
    if (name) {
        console.log("Hello " + name)
    }
    else {
        console.log("Hello Guest")
    }
}
greetUser(userName)
greetUser()

//Calling using Variable
let addNumbers = function (a, b) {
    console.log(a + b)
};
addNumbers(2, 3);

//Arrowed function
let addNumbersArrow = (a, b) => console.log(a + b);
addNumbersArrow(2, 3);

//Returning Value
let addNumbersReturn = (a, b) => {
    return (a + b)
};
let sum = addNumbersReturn(2, 4);
console.log(sum)

//Returning based on condition
let number = "8"
let isEven = (num) => {
    if (num % 2 === 0) { return true }
    else { return false };
}
console.log(isEven)
console.log(isEven(number))

console.log(isEvenNum(number))
function isEvenNum(num) {
    if (num % 2 === 0) { return true }
    else { return false };
}



// this creates the function
const greet = () => {
  console.log("Hello Vidhya");
}

greet()        // hey greet, RUN NOW!
greet("Kiran") // hey greet, RUN NOW with "Kiran"
greet;     // nothing happens — you just looked at the box
greet();   // Hello Kiran — now it runs!

function function1(input){
    //code here
}
//function1(userInput) // running the function

/* 
Summary
    let variableName1 = function(input){
    //code here
    //if needed return any value
}

let variableName2 = (input) => {
    //code
    //if needed return any value
}

let variableName3 = (input) => return value //if single return and single line
 */
