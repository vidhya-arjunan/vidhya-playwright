/* simple example of a async-await
function boilWater(){
    return new Promise((resolve)=>{
        console.log("Water starts to boil, 2 mins")
        setTimeout(()=>{
        resolve("Thanks for waiting, boiled water. You can have it now");
        },2000);
    });
}
async function main() {
    const message = await boilWater();
    console.log(message)
}
main(); */


function orderFood() {
    return new Promise((resolve) => {
        console.log("Food is being prepared");
        setTimeout(() => {
            resolve("Food is prepared");
        }, 2000);
        console.log("lemme do something else while food is being prepared")
    })
}

function eatFood(message) {
    console.log(message);
}

async function main() {
    const message = await orderFood();
    eatFood(message);
}

main();
console.log("I am outside main!");