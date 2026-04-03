/* Classroom Assignment: Number Type
Learning Objective:
Learn to categorize a number as positive, negative, or zero using conditional statements in JavaScript.

Assignment Details:
Create a JavaScript code that determines if a number is positive, negative, or zero and returns a
corresponding string indicating the type.

Assignment Requirements:
1. Declare and initialize the variable.
2. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
and to handle the case when the number is zero.
3. GIve the corresponding string value for each case.
4. Print the result.*/

input = 0.0
if (input > 0){
    console.log(input + " is a Positive Number")
}
else if(input < 0){
    console.log(input + " is a Negative Number")
}
else console.log("That is a Zero!")