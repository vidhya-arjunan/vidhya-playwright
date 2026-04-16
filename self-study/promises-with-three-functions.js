/*Few examples to get comfortable with promises*/

/* function boilWater(){
    return new Promise((resolve)=>{
        console.log("Water starts to boil, 2 mins")
        setTimeout(()=>{
        resolve("Thanks for waiting, boiled water. You can have it now");
        },2000);
    });
}
boilWater().then((message)=>console.log(message)) */

function orderFood(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve("Ordering Food Complete");
    },2000);
    });
    }

function prepFood(msg){
    console.log(msg);
    console.log("Food Prep Started. Might take 2 secs");
    return new Promise((resolve)=>{
         setTimeout(()=>{
         resolve("Food is Ready");
    },2000);
    });
}

function eatFood(msg){
    console.log(msg);
    console.log("Ha! What a feast!");
}

orderFood().then(prepFood).then(eatFood)