//two arrays
//compare the two arrays
//fetch the common data

let num1=[2,3,4,5,6,1]
let num2=[5,6,1,2]
let match=[]
for(let i=0;i<num1.length;i++){ //outer loop
    //2 --> 5, 2-->6, 2-->7, 2-->8
  for(let j=0;j<num2.length;j++){ //inner loop
    if (num1[i] === num2[j]){
        //console.log("matched")
        match.push(num1[i])
    } 
    
  }
}
console.log(match)

forEachMatch = []
num1.forEach (num1Element =>{
    num2.forEach(num2Element =>{
        if(num1Element === num2Element){
            forEachMatch.push(num1Element) 
        }
    })
})
console.log(forEachMatch)


