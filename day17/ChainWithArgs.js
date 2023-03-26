Promise.resolve(1)
    .then(result1 => {
        console.log('result1:', result1);
        return result1 + 5;
    })
    .then(result2 => {
        console.log('result2:', result2);
        return new Promise(resolve => {
            resolve(result2 + 5);
        })
    })
    .then(result3 => {
        console.log('result3:', result3);
        return result3 + 5;
    })
    .then(result4 => {
        console.log('result4:', result4);
    })
    .catch(error => {
        console.log(error);
    });

    // pending states

    /*
        1. pending: waiting for a result. neither the promise is resolved or rejected yet.
        2. fulfilled: when the promise is resolved. it returns a value which we can access using then method.
        3. rejected: when the operation fails. we can access the rejected state using catch method.
    */