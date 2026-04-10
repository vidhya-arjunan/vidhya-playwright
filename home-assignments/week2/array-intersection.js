/* Array Intersection Calculation
Assignment Details:
Create a JavaScript program that defines a function to compute the intersection of two arrays.The
intersection should include elements that appear in both arrays without any duplicates.
Assignment Requirements:
1. Write a function named `intersection` that accepts two arguments, `arr1` and`arr2`, which are
arrays of numbers, and returns an array of their intersection.
2. Ensure no duplicate elements in the resulting array.If an element appears in both`arr1` and
    `arr2`, it should appear only once in the result.
3. Use a loop to find common elements.Iterate through each element of `arr1` and check if it is
present in `arr2` and not already included in the result array.
4. Include example calls to the `intersection` function with different arrays to demonstrate the
function’s functionality.Include examples with no common elements, all elements common, and
typical cases. */
function intersection(array1, array2) {
    let results = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                results.push(array1[i]);
            }
        }
    }
    return results;
}
const testArray1 = [1, 2, 5]
const testArray2 = [4,2]
if (intersection(testArray1, testArray2).length > 0) {
    console.log(intersection(testArray1, testArray2));
}
else {
    console.log("No matches");
}
