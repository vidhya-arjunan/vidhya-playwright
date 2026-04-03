/* Classroom Assignment: Conditional Statements
Learning Objective:
Learn if-else and switch case

Assignment Details:
Create two JavaScript code with `if-else` for browser launch messages, and with `switch` for test type
messages.
Assignment Requirements:
a) First one need to have input as browserName (string)
- use if-else (chrome or otherwise)
- Print the value
b) Second one need to have input as testType (string)
- use switch case (smoke, sanity, regression, default (smoke))
- Print the values
Hints to Solve:
For `launchBrowser`, use `if-else` to check if `browserName` is "chrome" and print accordingly. For
`runTests`, use a `switch` statement to handle different `testType` values, including a default case. */

let browserName = "Safari"
if (browserName === "Chrome"){
    console.log("Chrome is launched")
} else if (browserName === "Edge"){
    console.log("Edge is launched")
} else if (browserName === "Safari") {
    console.log("Safari is launched")
} else console.log ("Unknown Browser is launched")

let testType = "Functional"
switch (testType) {
    case "Regression":
        console.log("Regression tests are being run")
        break
    case "Sanity":
        console.log("Basic Sanity tests")
        break
    case "Smoke":
        console.log("Smoke tests after deployment")
        break
    case "Functional":
        console.log("Functional testing for new functionalities")
        break
    default:
        console.log("Random Exploratory tests")
}