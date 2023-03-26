new Promise((resolve, reject) => {
    console.log('initial');
    resolve();
})
    .then(() => {
        throw new Error('something failed');
        console.log('do this'); // dead code or unreachable code
    })
    .catch(() => {
        console.log('do that');
    })
    .then(() => {
        console.log('do this, no matter what happened before');
    })
    .then(() => {
        console.log('execute this too');
    });