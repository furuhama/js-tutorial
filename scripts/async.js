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
setTimeout(() => {
  console.log("Inside setTimeout() and Start asyncBlockTime()");
  asyncBlockTime(1000);
  console.log("Inside setTimeout() and End asyncBlockTime()");
}, 10);
console.log("End script");
