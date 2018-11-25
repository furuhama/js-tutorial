asyncBlockTime = (timeout) => {
  const startTime = Date.now();
  while(true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return;
    }
  }
}

console.log("Start script");
// setTimeout runs asynchronously
//
// In JavaScript, almost all async functions runs on a main thread(a.k.a. UI thread).
setTimeout(() => {
  console.log("Inside setTimeout() and Start asyncBlockTime()");
  asyncBlockTime(1000);
  console.log("Inside setTimeout() and End asyncBlockTime()");
}, 10);
console.log("End script");
