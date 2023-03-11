// spread and rest operators

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);
// console.log(...numbers);

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let combinedArray = [...array1, ...array2];

// console.log(combinedArray);

// let person1 = {
//     name: 'krish',
//     age: 20
// };

// let person2 = {
//     ...person1,
//     location: 'India'
// };

// console.log(person1);
// console.log(person2);

// let person1 = {
//     name: 'krish',
//     age: 20
// };

// let person2 = {
//     name: 'krith',
//     age: 25
// };

// let combinedObject = {
//     ...person1,
//     ...person2
// };

// console.log(person1, person2, combinedObject);

// let person1 = {
//     name: 'krish',
//     age: 20
// };

// let person2 = {
//     location: 'India',
//     language: 'English'
// };

// let combinedObject = {
//     ...person1,
//     ...person2
// };

// console.log(combinedObject);

// function sum(...numbers) {
//     return numbers.reduce((total, number) => total + number, 0);
// }

// console.log(sum(5, 6, 7, 8));

function display(arg1, arg2, ...args) {
    console.log(args.slice(0, 2));
}


display('krish', 30, 2023, 34.56, true, 100); 

