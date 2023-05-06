// var vs let vs const

// re-declaration

// let number = 12;

// let number = 15;

// in var
// var number = 12;

// var number = true;

// console.log(number)

// const x = 5;

// x = 6;

// console.log(x);

// let l = 5;

// var v = 6;

// l = 10;

// v = 12;

// console.log(l, v);

// Scope
// let x = 5; // global scope

// {
//     // inside block
//     console.log(x);
// }

// console.log(x);

// {
//     let x = 6; // block scope
//     console.log(x);
// }

// console.log(x);

// {
//     var x = 6; // global scope
//     console.log(x);
// }

// console.log(x);

// for (let i = 0; i < 10; i++){
//     // i is known only to the for block

// }

// console.log(i);

// for (var i = 0; i < 10; i++){
//     // i is known only to the for block

// }

// console.log(i);

// hoisting

// console.log(x);
// let x = 5; // no hoisting


// x = 5;
// console.log(x);
// var x; // hoisting

// console.log(x);
// const x = 6;

// console.log(x);

// var x;

// sayHello();

// function sayHello() {
//     console.log('hello');
// }

// var sayHello = function() {
//     console.log('hello');
// }

// var sayHello = () => {
//     console.log('hello');
// }

// let x = 5;

// function print() {
//     let x = 12;
//     console.log('inside block', x);
// }

// print();
// console.log('outside block', x);

// function print() {
//     let x = 12;
//     console.log('inside block', x);
// }

// print();
// console.log('outside block', x);

// let x = 5; // global scope

// function print() {
//     x = 12;
//     console.log(x);
// }

// print();
// console.log(x);

// const x = 5;

// x = 6;

// console.log(x);

// const array = [1, 2, 3, 4, 5];

// // array[0] = 10;

// array = [4, 5, 6]; // this is not possible

// console.log(array);

// const obj = {
//     x: 1,
//     y: 2
// };

// obj = {
//     m: 12,
//     n: 13
// };

// console.log(obj);