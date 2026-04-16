/* let testString = "hello world"
    let tempString = "" ,strLength=0
function word(){
for (let i=0; i<testString.length; i++){
    if (testString.charAt(i) != " "){
        tempString = tempString + testString.charAt(i)
        //console.log(tempString)
    }
    else{
        console.log(tempString)
        return tempString
    }
}

}
word() */


let testString = "hello world vidhya";
let tempString = "";
let result = "";

for (let i = 0; i < testString.length; i++) {

    if (testString.charAt(i) !== " ") {
        tempString = tempString + testString.charAt(i);
    } 
    else {
        // reverse tempString
        let reversed = "";
        for (let j = tempString.length - 1; j >= 0; j--) {
            reversed = reversed + tempString[j];
        }

        result = result + reversed + " ";
        tempString = ""; // reset
    }
}

// handle last word (VERY IMPORTANT)
let reversed = "";
for (let j = tempString.length - 1; j >= 0; j--) {
    reversed = reversed + tempString[j];
}
result = result + reversed;

console.log(result);