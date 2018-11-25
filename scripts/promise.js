// Dummy function for Promise object
function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/success")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}

// Simulate promise function is successed.
dummyFetch("/success/data").then(function onFulfilled(response) {
    console.log(response);
}, function onRejected(error) {
    console.log(error);
});

// Simulate promise function is failed.
dummyFetch("/failure/data").then(function onFulfilled(response) {
    console.log(response);
}, function onRejected(error) {
    console.log(error);
});

// ===================================================================

// Always fail
function errorPromise(message) {
  return new Promise((resolve, reject) => {
    reject(new Error(message));
  });
}

// Just to handle errors, you should use `catch`.
errorPromise("handle error").catch(error => {
  console.log(error.message);
});
