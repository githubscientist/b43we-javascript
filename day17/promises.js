// promises are used to handle asynchronous operations

let promise = new Promise((resolve, reject) => {
    // perform some asynchronous operation
    let result = 11;

    if (result > 10) {
        resolve(result); // the promise gets resolved
    } else {
        reject('result is not greater than 10'); // reject the promise
    }
});

// consume the promise
promise.then(
    value => console.log('Result:', value),
    error => console.log('Error:', error)
);

