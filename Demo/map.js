// map method in Array

// let array = [1, 2, 3, 4, 5, 6, 7];

// prepare another array with the squares of the numbers in the array
// named 'array'

// without the map method

// // create a new array with squares
// let squares = [];

// // traverse through the existing array
// for (let item of array) {
//     // square the item
//     let square = item ** 2;

//     // push it to the squares array
//     squares.push(square);
// }

// console.log(squares);


// // create a new array with squares
// let squares = [];

// // traverse through the existing array
// for (let item of array) {
//     squares.push(item**2);
// }

// console.log(squares);

// let array = [1, 2, 3, 4, 5, 6, 7];

// // let squares = array.map((item) => {
// //     return item ** 2;
// // });

// let squares = array.map(item => item**2);

// console.log(squares);

// function squareMapper(item) {
//     return item ** 2;
// }


// let array = [1, 2, 3, 4, 5, 6, 7];

// let squares = array.map(squareMapper);

// console.log(squares);


// let array = [1, 2, 3, 4, 5, 6];

// // multiply every array element by its index+1

// // [1 * 1, 2 * 2, 3 * 3, 4 * 4, 5 * 5, 6 * 6]
// // [1, 4, 9, 16, 25, 36]

// let multiples = array.map((item, index) => {
//     return item * (index + 1); 
// });

// console.log(multiples);

// let strings = ['hello', 'world', 'how', 'are', 'you'];

// // using map method, transform the array into a new array with the lengths
// let lengths = strings.map((name) => {
//     return name.length;
// });

// console.log(lengths);

// let array = [1, 2, 3, 4, 5];

// let multiples = array.map((item, index, array) => {
//     return item * 2;
// });

// console.log(multiples);

// given a array of strings, find whether the string is beautiful or not
// we say the string is beautiful, if it does not have any vowels in it.!


// function wordMapper(word) {
//     let vowels = 0;
//     for (let char of word) {
//         switch (char) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 vowels++;
//                 break;
//         }
//     }
//     if (vowels == 0) {
//         return 'yes'; 
//     } else {
//         return 'no';
//     }
// }

// let words = ["crypt", 'apple', 'gypsy', 'mythy', 'orange', 'javascript'];

// // let checks = ['yes', 'no', 'yes', 'yes', 'no', 'no']

// let checks = words.map(wordMapper);

// console.log(checks);

