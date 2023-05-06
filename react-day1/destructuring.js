// array & object destructure

// let numbers = [1000, 2, 5];

// the first value => principal value
// the second value => number of years
// the third value => rate of interest

// let numbers = [1000, 2, 5];

// let principalAmount = numbers[0];
// let numberOfYears = numbers[1];
// let rateOfInterest = numbers[2];

// console.log(principalAmount, numberOfYears, rateOfInterest);

// destructuring
// let [principalAmount, numberOfYears, rateOfInterest] = [1000, 2, 5];

// console.log(principalAmount, numberOfYears, rateOfInterest);

// let numbers = [1, 2, 3, 4, 5];

// skip the array elements
// let [, , , d, e] = numbers;

// let [d, e] = numbers.slice(3,);

// console.log(d, e);

// let numbers = [1, 2];

// let [a, b, c = 3] = numbers;

// console.log(a, b, c);

// // swapping two variables values
// let a = 5;
// let b = 6;

// console.log(`a = ${a} and b = ${b}`);

// // swapping logic
// // let temp = a;
// // a = b;
// // b = temp;
// // using destructuring
// [a, b] = [b, a];

// console.log(`a = ${a} and b = ${b}`);

// let MinMax = (...numbers) => {
//     let min = numbers[0];
//     let max = numbers[0];

//     for (let number of numbers) {
//         if (number < min) min = number;
//         if (number > max) max = number;
//     }

//     return [min, max];
// }

// let [min, max] = MinMax(1, 2, 3, 4, 5, 6, 7);

// console.log(min, max);

// object destructuring
// let person = {
//     name: 'krish',
//     age: 20
// };

// let { name, age } = person;

// console.log(name, age);

// let person = {
//     name: 'krish',
//     age: 20
// };

// let { name: nameOfPerson, age: ageOfPerson } = person;

// console.log(nameOfPerson, ageOfPerson);