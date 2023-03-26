function firstTask(callback) {
    console.log('starting first task');
    setTimeout(() => {
        console.log('first task is completed');
        callback();
    }, 1000);
}

function secondTask(callback) {
    console.log('starting second task');
    setTimeout(() => {
        console.log('second task is completed');
        callback();
    }, 1000);
}

function thirdTask(callback) {
    console.log('starting third task');
    setTimeout(() => {
        console.log('third task is completed');
        callback();
    }, 1000);
}

// callback hell
firstTask(function () {
    secondTask(function () {
        thirdTask(function () {
            console.log('all tasks completed');
        });
    });
});