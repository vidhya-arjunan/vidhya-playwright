//simple examples for try catch block
let marks = 30;
try {
    if (marks < 35) {
        throw new Error("You Failed");
    }
    else console.log("You passed");
}
catch (error) {
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
}

function boilWater(gas) {
    return new Promise((resolve, reject) => {
        console.log("Request received to boil water");
        if (gas === "on") {
            console.log("Starting to boil");
            setTimeout(() => {
                resolve("Water Boiled, have it!");
            }, 2000);
        }
        else
            reject(new Error("Unable to boil, switch on gas first"));
    });
}
stoveOn = "on"
async function main() {
    try {
        const message = await boilWater(stoveOn);
        console.log(message)
    }
    catch (error) {
        console.log(error.message)
    }
}            
main();
