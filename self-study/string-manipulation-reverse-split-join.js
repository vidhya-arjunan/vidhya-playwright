let testString = "vidhya"
console.log(testString.split("").reverse().join(""))

testString = "vidhya"
console.log(testString.substring(3))

testString = "vidhya"
console.log(testString.substring(3,5))

testString = "vidhya"
console.log(testString.slice(-5,-2))

let testString1= "Rs.2599.00"
console.log(testString1.replace("Rs.",''))
console.log(testString1.replace(/[^0-9.]/g, ''));

function double(x){
return x * 2
}
let testArray = ["1","2","3"]
console.log(testArray.map(double))
