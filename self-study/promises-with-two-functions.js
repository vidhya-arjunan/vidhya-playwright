/* 

This function with callback is modified with promises

function orderFood(callback){
console.log("Food is being prepared");
setTimeout(()=>{
console.log("Food is prepared");
callback();
},2000);
}
function eatFood(){
    console.log("Let's eat it");
}
console.log("Using Callback");
orderFood(eatFood)
console.log("Lemme do something while waiting");
 */

function orderFood() {
return new Promise((resolve) => {
    console.log("Food is being prepared");
    setTimeout(() => {
        console.log("Food is prepared");
        resolve();
    }, 2000);
})
}

function eatFood() {
    console.log("Let's eat it");
}

console.log("Using Promise");
orderFood().then(eatFood);
console.log("Lemme do something while waiting");

/* general format
function fn1(){
return new Promise((resolve)=>{
//async work
resolve();
});
}
fn2(){
//nextstep
}
fn1().then(fn2); */