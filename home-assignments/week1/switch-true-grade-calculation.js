/* Classroom Assignment: Grade Calculation
Learning Objective:
Learn to use switch statements in JavaScript to categorize data based on multiple conditions.

Assignment Details:
Write a JavaScript code that evaluates a student's score and prints their grade using a switch statement to
assess score ranges.
Assignment Requirements:
1. Declare and initialize the variable.
2. Use `switch` statement inside the function.
3. Print the corresponding grade.*/

studentMarks = 10
switch(true){
    case(studentMarks >= 90 && studentMarks <=100):{
        console.log("Distinction")
        break
    }
    case(studentMarks >= 80 && studentMarks <=100):{
        console.log("First Class")
        break
    }
    case(studentMarks >= 60 && studentMarks <=100):{
        console.log("Second Class")
        break
    }
    case(studentMarks >= 35 && studentMarks <=100):{
        console.log("Just Pass")
        break
    }
    case(studentMarks < 35):{
        console.log("Simply Waste")
        break
    }
    default:
        console.log("Invalid Input")
}