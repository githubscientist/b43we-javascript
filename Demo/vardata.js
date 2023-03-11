// variables

// let score = 100;

// score = 123;

// console.log(score);

/*

keywords to create variables and constants:

- var
- let
- const

*/

// let salary = 10000; // scope of this variable will be block-level

// var score = 34; // scope - global-level

// let salary;

// var score = 67;

// console.log(salary, score);

// const PI = 3.14;

// PI = 3.1456;

// console.log(PI);

// datatypes

/*

number type:

- integer
- floating point type

string type:

- sequence of characters
- character can be an alphabet - uppercase or lowercase, numbers, special chars, spaces, symbols or keys
- enclosed within either single quotes or double quotes

boolean type:

- true or false as values
- require less memory

object type:

- arrays
    - single dimensional 
    - two dimensional
    - multi-dimensional

- JSON objects

*/

// let age = 21;

// console.log(age, typeof (age));

// let score = 23.645;

// console.log(score, typeof (score));

// let name = 'sathish';

// console.log(name, typeof (name));

// let place = "tamilnadu";

// // t a m i l n a d u
// // 0 1 2 3 4 5 6 7 8

// console.log(place, typeof (place));

// console.log(place[8]);

// console.log(place.length, name.length);

// let string = 'Apple@65432#$';

// console.log(string);


// let hadBreakfast = false;

// console.log(hadBreakfast, typeof (hadBreakfast));

// array type

// let array = ['chennai', 'sathish', 21, true];
//              0           1       2   3

// console.log(array, typeof (array));

// arrays are mutables
// array[1] = 'krish';

// console.log(array, array[1]);

// accessing the last value of the array
// console.log(array[array.length-1]);

// objects
// JSON object

// key - value pairs

// let person1 = {
//     name: 'krish',
//     age: 22,
//     score: 67,
//     salary: 10000
// };

// console.log(person1, typeof (person1));

// console.log(person1.age, person1.name, person1.score, person1.salary);

// console.log(Object.entries(person1));

// Iteration

// array

let array = [1, 2, 3, 4, 5];// iterable

// for (let value of array) {
//     console.log(value);
// }

// console.log('index', ':', 'value');
// // index and the value
// for (let index in array) {
//     console.log(index, ':', array[index]);
// }

// for (let index = 0; index < array.length; index++){
//     console.log(index, ':', array[index]);
// }

// array.forEach((value) => {
//     console.log(value);
// });


// object


// let person1 = {
//     name: 'krish',
//     age: 22,
//     score: 67,
//     salary: 10000
// };

// for (let key in person1) {
//     console.log(key, person1[key]);
// }

// for (let key of Object.keys(person1)) {
//     console.log(key, ':', person1[key]);
// }

// for (let value of Object.values(person1)) {
//     console.log(value);
// }

// for (let entry of Object.entries(person1)) {
//     console.log(entry[0], entry[1]);
// }

// for (let [key,value] of Object.entries(person1)) {
//     console.log(key, value);
// }


// Copy by Value and Copy by Reference

// let a = 5; // a = 10

// let b = a; // b = 5 // copy by value

// a = 10;

// console.log(a); // 10
// console.log(b); // 5

// let obj1 = {
//     prop: "value"
// };

// let obj2 = obj1; // copy by reference

// obj2.prop = "new value";

// console.log(obj1);
// console.log(obj2);

// shallow copy and deep copy

// method: 1
// Object.assign()

// let obj1 = {
//     prop: "value"
// };

// let obj2 = Object.assign({}, obj1); // shallow copy

// obj1.prop = "new value";

// console.log(obj1);
// console.log(obj2);


// method: 2
// spread operator

// let obj1 = {
//     prop: "value"
// };

// let obj2 = {...obj1}; // shallow copy

// obj1.prop = "new value";

// console.log(obj1);
// console.log(obj2);


// method: 3
// shallow copy

// let obj1 = {
//     prop: "value"
// };

// let obj2 = JSON.parse(JSON.stringify(obj1)); // shallow copy

// obj1.prop = "new value";

// console.log(obj1);
// console.log(obj2);

// Window and Document Objects

