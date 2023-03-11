// arrow functions

// let square = x => x * x;

// let square = (x) => {
//     if (x % 2 != 0) {
//         return x ** 2;
//     } else {
//         return x ** 3;
//     }
// };

// console.log(square(3));

// filter the vowels in a string


let filterVowels = (string) => {
    let array = string.split('');
    return array.filter((char) => {
        switch (char) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return false;
            default:
                return true;
        }
    }).join('');
};

console.log(filterVowels('javascript'));