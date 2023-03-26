let promise = new Promise((resolve, reject) => {
    // randomly generate a number between 1 and 10
    let randomNumber = Math.random() * 10;

    if (randomNumber > 5) {
        resolve('success');
    } else {
        resolve('error');
    }
});

console.log(promise);