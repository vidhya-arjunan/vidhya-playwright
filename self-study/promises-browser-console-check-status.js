// A Promise that stays pending forever
const pendingPromise = new Promise(() => {});
console.log("Immediately after creation:", pendingPromise);

// A Promise that resolves after 2 seconds
const resolvedPromise = new Promise((resolve) => {
  setTimeout(() => resolve("I am resolved!"), 2000);
});
console.log("Immediately after creation:", resolvedPromise);
resolvedPromise.then(value => console.log("Later, resolved with:", value));

// A Promise that rejects after 2 seconds
const rejectedPromise = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("I am rejected!")), 2000);
});
console.log("Immediately after creation:", rejectedPromise);
rejectedPromise.catch(err => console.log("Later, rejected with:", err.message));
