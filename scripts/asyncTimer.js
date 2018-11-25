function blockTime(timeout) {
  const startTime = Date.now();
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return;
    }
  }
}

const startTime = Date.now();
setTimeout(() => {
  const endTime = Date.now();
  console.log(`It takes ${endTime - startTime} ms to run an async callback function.`);
}, 10);
console.log("Start blocking process");
blockTime(1000); // block a main thread for a second
console.log("End blocking process");

// Result:
//
// ```
// workspace/js-tutorial - [master] (′•_•) node scripts/asyncTimer.js
// Start blocking process
// End blocking process
// It takes 1004 ms to run an async callback function.
// ```
//
// Since also async functions run on a main thread,
// it takes more than `10` ms. (In this situation, it takes more than 1000 ms.)
//
// To avoid this problem, we could use WebWorker API for example.
