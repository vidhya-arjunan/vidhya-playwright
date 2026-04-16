//alphabet occurence

let testString = "Vidhya Arjunan"
let charToCheck = " "
let numberOfOccurence1 = 0;
let numberOfOccurence2 = 0;

testString = testString.toLowerCase()
charToCheck = charToCheck.toLowerCase()

for (i = 0; i < testString.length; i++) {
    if (testString.charAt(i) == charToCheck) {
        numberOfOccurence1++;
    }
}

//Using another method
for (i = 0; i < testString.length; i++) {
    if (testString[i] == charToCheck) {
        numberOfOccurence2++;
    }
}

console.log("'" + charToCheck + "'" + " " + " occurs" + " " + numberOfOccurence1 + " " + "times in " + testString)
console.log("'" + charToCheck + "'" + " " + " occurs" + " " + numberOfOccurence2 + " " + "times in " + testString)


//Reversing the String
let readingTestString = ""

for (i = 0; i < testString.length; i++) {
    readingTestString = readingTestString + testString[i]
}

let reverseString = ""

for (i = testString.length - 1; i >= 0; i--) {
    reverseString = reverseString + testString[i]
}

console.log("Reading the String:" + " " + readingTestString)
console.log("Reversed String:" + " " + reverseString)
