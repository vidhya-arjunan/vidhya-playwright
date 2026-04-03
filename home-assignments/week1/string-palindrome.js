/* Classroom Assignment: Strings in JS
Learning Objective:
Understand how to reverse a string and check for palindromes in JavaScript by manipulating strings and
using conditional logic.

Assignment Details:
Create a JavaScript code that have a string, reverses it, and checks if the reversed string is a palindrome,
print the results.

Assignment Requirements:
1. Convert the input into characters
2. Loop them in reverse direction
3. Concatenate the string
4. Print the new string
[If the given string and reverse string are the same, it is a palindrome]
1. Check if the reverse string and original string are the same
2. Print true if same, else the false. */

let inputString = "baaaab"
let reverseString = ""
for (let i=inputString.length; i>=0; i--){
    reverseString = reverseString + inputString.charAt(i)
}
console.log("Original String: " + inputString + "\n" + "Reversed String: " + reverseString)
if (inputString === reverseString){
    console.log("Yes! It is a Palindrome")
}
else console.log("No! It doesn't look like a Palindrome")
