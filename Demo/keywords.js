// var vs let vs const

// var score = 45;

// var score = 'forty';

// console.log(score);

// let score = 45;

// score = 34;

// console.log(score);

// scope difference

// var score = 45; //global scope
// console.log(score);

// if (true) {
//     // var score = 60;
//     console.log(score);
// }

// console.log(score);

// var is hoisted - using a variable before it is declared in the code.

// console.log(score);

// var score;

// var score = 45; //global scope
// console.log(score);

// if (true) {
//     var score = 60;
//     console.log(score);
// }

// console.log(score);

// for (var i = 0; i < 10; i++){
    
// }

// console.log(i);

// function display() {
//     var score = 45;

//     function sub() {
//         console.log(score);
//     }

//     console.log(score);
//     sub();
// }

// display();

// let score = 45;

// score = 'forty five';

// console.log(score);

// let score = 30;

// console.log(score);

// if (true) {
//     let score = 45; // block level scope
//     console.log(score);
// }

// console.log(score);

// for (let i = 0; i < 10; i++){

// }

// console.log(i);

// function display() {
//     let score = 45;

//     function sub() {
//         console.log(score);
//     }

//     console.log(score);
//     sub();
// }

// display();

// constants using const keyword

// const country = 'India';

// country = 'Canada';
// console.log(country);

// const PI = 3.14;

// let radius = 3.65;

// console.log(PI * radius ** 2);

// const array = [1, 2, 3, 4, 5];

// console.log(array);

// array[0] = 11;

// console.log(array);

// // the following commented lines throws error
// // as we are trying to change the address of the const array pointer
// // array = [1, 2, 3, 4, 5];

// // console.log(array);

// array[5] = 6;

// console.log(array);

// const person = {
//     name: 'krish',
//     age: 10  
// };

// console.log(person);

// person.age = 15;

// console.log(person);

// person = 'krish';

// console.log(person);

// let name = '"G","A","N","E","S","H"';

// // console.log(name.split('"'));

// let array = name.split('"');
// let result = [];

// for (let i = 0; i < array.length; i++){
//     if (array[i] >= 'A' && array[i] <= 'Z') {
//         result.push(array[i]);
//     }
// }

// console.log(result.join(''));


