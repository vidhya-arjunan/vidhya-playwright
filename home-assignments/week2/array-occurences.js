/* Arrays in JS
Learning Objective:
Learn how to count the occurrences of a specific element in an array using JavaScript.

Assignment Details:
Find the number of occurrences.
Given the array, const nums = [2,4,5,2,1,2];
if const k = 2, then output >> 3

Assignment Requirements:
1. Initialize count to 0.
2. Loop through the array `nums`.
3. If the element equals `k`, increment count.
4. Return the count of `k` in `nums`.*/

const nums = [2, 4, 5, 2, 1, 2, 10, 7, 3 , 3]
let inputToCheck = 3
let occurrenceCount = 0
for (let i = 0; i < nums.length; i++) {
    if (inputToCheck === nums[i])
        occurrenceCount++;
}
console.log("The number " + inputToCheck + " occurs " + occurrenceCount + " number of times in the given array");
