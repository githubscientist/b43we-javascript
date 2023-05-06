// spread operator
// ...

// let numbers = [1, 2, 3];

// let moreNumbers = [...numbers, 4, 5, 6];

// console.log(moreNumbers);

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// // let combinedArray = [...array1, ...array2];
// let combinedArray = [...array2, ...array1];

// console.log(combinedArray);

// shallow copy vs deep copy
// let array1 = [1, 2, 3];

// let array2 = array1;

// array2[1] = 12;

// console.log(array1);
// console.log(array2);

// let array1 = [1, 2, 3];
// let array2 = [...array1]; // deep copy

// array2[1] = 12;

// console.log(array1);
// console.log(array2);

// let object1 = {
//     x: 10,
//     y: 12
// };

// let object2 = {
//     ...object1,
//     z: 15
// };

// console.log(object2);

// var x = 10;

// if (true) {
//     var x = 20;
// }

// console.log(x);

// let x = 10;

// if (true) {
//     x = 20;
// }

// console.log(x);

/*
    4. Write a function that takes a number as input and returns a new
    function that adds that number to any input number using lexical scoping
    and closure.

    functionA(num1)
        : return functionB(num2):
            return num1 + num2 => 11

    (functionA(5))(6) => 11
*/


// function setInitialNumber(number) {
//     return (increment) => {
//         return number + increment;
//     }
// }

// let doIncrement = setInitialNumber(10);
// console.log(doIncrement(5));
// console.log(doIncrement(15));

// let word = 'apple';

// let charArray = [...word];

// console.log(charArray);