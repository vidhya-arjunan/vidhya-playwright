//Print the odd numbers from 10 to 20 using a for loop and an if condition.
console.log("Odd numbers between 10 and 20:")
for (let i = 10; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

//switch case
choice = "6"
switch (choice) {
    case "1":
        console.log("good one")
        break

    case "2":
        console.log("wow")
        break

    default:
        console.log("reached here")
        break
}