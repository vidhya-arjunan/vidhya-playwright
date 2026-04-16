function orderFood(callback1) {
    setTimeout(() => {
        console.log("Ordered Food");
        callback1();
    }, 200);
}

function prepFood(callback2) {
    console.log("Food Prep Started. Might take 2 secs");
    setTimeout(() => {
        console.log("Food is Ready");
        callback2();
    }, 200);
}

function eatFood() {
    console.log("Ha! What a feast!")
}

orderFood(() => {
    prepFood(() => {
        eatFood();
    })
});

//orderFood(prepFood(eatFood())); // might not work -> as eatfood() gets executed first then prepfood() then orderfood()


//setTimeout(()=>{},200)