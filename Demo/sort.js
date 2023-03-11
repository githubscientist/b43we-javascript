// let sorter = (a, b) => {
//     return a - b;
//     // return
//     // if a is smaller than b, the difference is going to be negative
//     // if a is larger than b, then returns positive, because the diff is +ve
//     // if a and b are equal, then returns 0
// }

// let sorter = (a, b) => {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return +1;
//     } else {
//         // a == b
//         return 0;
//     }
// }


// let numbers = [3, 7, 1, 4, 6, 5, 10, 8, 9, 2];

// sort method in an array 
// in-place - it changes the original array

// numbers.sort((a, b) => a - b);

// numbers.sort((a, b) => b - a);

// numbers.sort(sorter);

// console.log(numbers);

// let words = ['apple', 'airforce', 'aeroplane', 'avacado', 'angry', 'aegis', 'ant', 'ankle'];

// words.sort(sorter);

// console.log(words);

// let sorter = function (a, b) {
//     if (a[0] < b[0]) {
//         return -1;
//     } else if (a[0] > b[0]) {
//         return +1;
//     } else {
//         return 0;
//     }
// }

// let words = ['apple', 'airforce', 'aeroplane', 'avacado', 'angry', 'aegis', 'ant', 'ankle'];

// let lengths = [];

// words.forEach((item) => {
//     lengths.push([item, item.length]);
// });

// // console.log(lengths);

// lengths.sort((a, b) => a[1] - b[1]);

// lengths.sort(sorter);

// console.log(lengths);