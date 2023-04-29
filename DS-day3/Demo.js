// const Array = require('./Array');

// let numbers = new Array();

// numbers.push(3);
// numbers.push(4);
// numbers.push(5);
// numbers.push(7);

// // numbers.print();

// numbers.forEach((item) => {
//     if (item % 2 == 0) {
//         console.log(`${item} is a even number`);
//     } else {
//         console.log(`${item} is a odd number`);
//     }
// });

const Array = require('./Array');

let array = new Array();

array.push(5);
array.push(6);
array.push(7);

// array.print();

array.forEach((item, index, array) => console.log(item, index, array[index]));