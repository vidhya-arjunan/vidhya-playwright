//this code shows why asynchronous execution in js can be an issue.
//we want orderFood to be completed before eatFood. but it works other way around
/* function orderFood(){
setTimeout(()=>{
console.log("Food is being prepared")
},2000)
}

function eatFood(){
    console.log("Let's eat it")
}
console.log("Normal")

orderFood()
eatFood() */

/* the above code is slightly modified to get proper sequence
we want orderFood to be completed before eatFood. This works, but say after we have order food,
there are many flows - eatFood, takeaway, etc. so every time we need to handle if we hard code it like this */
/* function orderFood(){
setTimeout(()=>{
console.log("Food is being prepared")
eatFood()
},2000)
}

function eatFood(){
    console.log("Let's eat it")
}
console.log("Normal")

orderFood() */

/*using callback
here we are giving the control of next step's beginning to the function which has delay/which needs to be executed as a pre-req
so we give next step as a parameter to the first step. First step executes it when it's task is complete, instead of 
js running next step immediately*/

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
 


