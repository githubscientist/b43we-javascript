let promise1 = new Promise((resolve, reject) => {
    // perform a asynchronous operation
    let result = 10;
    resolve(result);
});

let promise2 = promise1.then(value => {
    // perform another asynchronous operation that depends
    // on the result of promise1
    let result = value * 2;
    return result;
});

let promise3 = promise2.then(value => {
    // perform another asynchronous operation that depends
    // on the result of promise2
    let result = value + 5;
    return result;
});

promise3.then(value => {
    console.log('Result: ', value)
}, error => {
    console.log('Error: ', error);
});