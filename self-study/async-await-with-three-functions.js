function orderFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ordered Food");
            resolve();
        }, 200);
    });
}

function prepFood() {
    return new Promise((resolve) => {
        console.log("Food Prep Started. Might take .2 secs");
        setTimeout(() => {
            console.log("Food is Ready");
            resolve();
        }, 200);
        console.log("Oh .2 secs is so much time! I can check my phone")
    })

}

function eatFood() {
    console.log("Ha! What a feast!")
}
async function main() {
await orderFood();
await prepFood();
eatFood();
}

main();