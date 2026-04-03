/* Classroom Assignment: Looping Statements
Learning Objective:
Learn the fundamentals of looping statements in JavaScript

Assignment Details:
Write a JavaScript code that prints odd numbers between 1 and 25
Assignment Requirements:
1. Create a looping statement and print odd numbers (from 1 to 25) and execute in debug mode
2. Print the result */
let range = 25
console.log("Odd numbers until " + range)
for (let i=0; i<=range; i++){
if(i %2 != 0){
    console.log(i)
}
}