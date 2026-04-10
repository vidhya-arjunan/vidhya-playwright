/* Two Sum

Learning Objective:
Learn to identify and return pairs of indices whose elements sum up to a specific target using nested loops in
JavaScript.

Assignment Details:
Given the array, const nums = [2, 4, 7, 8, 11, 14];
const target = 18;
return the indices that have matching targets >> 7+11 (2, 4), 4+14 (1, 5)

Assignment Requirements:
1. Initialize an empty array `results`.
2. Use a nested loop to iterate over `nums` array elements.
3. Check if the sum of two distinct elements equals `target`.
4. If true, add their indices to `results`.
5. Return `results` containing pairs of indices. */

const nums = [2, 4, 7, 8, 11, 14, 9]
const target = 18
let results = []
let numberPairs = []
for (i = 0; i < nums.length; i++) {
    let element = nums[i]
    for (j = 0; j < nums.length; j++) {
        if (target - nums[i] === nums[j]) {
            results.push([i, j])
            numberPairs.push([nums[i], nums[j]])
        }

    }
}
console.log(results)
console.log(numberPairs)