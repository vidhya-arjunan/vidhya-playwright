
let testString = 'aaabccddeeff'
let charToCheck

for (let i = 0; i < testString.length; i++) {
    charToCheck = testString.charAt(i)
    count = 0

    for (let j = 0; j < testString.length; j++) {
        if (charToCheck == testString.charAt(j)) {
            count = count+1
            //console.log(charToCheck, count)
        }

    }
    if (count == 1) {
        console.log("answer: " + charToCheck)
        break
    } else if(i== testString.length-1)
        console.log("no non-repeating characters")
}