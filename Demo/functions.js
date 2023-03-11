// functions
// scopes
// return keyword
// types of functions

// function greet(message) {
//     console.log(message);
// }


// let message = "Hi, Welcome!";
// greet("Hi, Welcome!");

// function power(number, exponent) {
//     // let result = number ** exponent;
//     // return result;
//     return number ** exponent;
// }

// // console.log(power(5, 3));

// let result = power(5, 3);
// console.log(result);

// let global = 20;

// function display() {
//     let local = 10; // local scope
//     console.log(local);
// }

// // display();
// // console.log(global);

// display();
// // console.log(local);

// function types

// method 1:

// function sayHi(user) {
//     console.log('Hi', user, '!');
// }

// sayHi('krish');

// method 2:

// let sayHi = function (user) {
//     console.log('Hi', user, '!');
// }

// sayHi('krish');

// method 3:

// let sayHi = (user) => {
//     console.log('Hi', user, '!');
// }

// sayHi('krish');

// function check() {
//     // return a anonymous function
//     return (message) => {
//         console.log(message);
//     };
// }

// let sayHi = check();
// // console.log(message);

// sayHi('hi everyone!');

// let sayHi = (message) => {
//         console.log(message);
// };
    
// sayHi('hi everyone!');

function operations(option) {
    let add = (first, second) => {
        return first + second;
    }

    let sub = (first, second) => {
        return first - second;
    }

    let mul = (first, second) => {
        return first * second;
    }

    let div = (first, second) => {
        return first / second;
    }

    switch (option) {
        case 0:
            return add;
        case 1:
            return sub;
        case 2:
            return mul;
        case 3:
            return div;
    }
}

let [add, sub, mul, div] = [operations(0), operations(1), operations(2), operations(3)];

console.log(add(5, 6), sub(5,6), mul(5,6), div(5,6));