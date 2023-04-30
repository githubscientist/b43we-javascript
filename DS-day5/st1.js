// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    tos() {
        return this.items[this.top];
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    isEmpty() {
        return this.top == -1;
    }
}

// function isAdjacentEqual(words) {
//     for (let index = 0; index < words.length; index++){
//         if (words[index] == words[index + 1]) {
//             return [index, true];
//         }
//     }
//     // return false when we do not find any two adjacent words equal
//     return [-1, false];
// }

// inp.on("close", () => {
//   //start-here
//   //Your code goes here … replace the below line with your code logic 

//     let sentence = userInput[0];
//     let words = sentence.split(' ');

//     let checkAgain = true;

//     while (checkAgain) {
//         // check the adjacent words
//         let [index, checkAgain] = isAdjacentEqual(words);

//         // remove the indexes if the checkAgain is true, else break
//         if (checkAgain) {
//             // remove the indexes here
//             words.splice(index, 1);
//             words.splice(index, 1);
//         } else {
//             break;
//         }
//     }

//     console.log(words.join(' '));

//   //end-here
// });

inp.on("close", () => {

    let sentence = userInput[0];
    let words = sentence.split(' ');

    let stack = new Stack();

    for (let word of words) {
        if (stack.isEmpty()) {
            stack.push(word);
        } else {
            if (stack.tos() == word) {
                stack.pop();
            } else {
                stack.push(word);
            }
        }
    }

    // check if the stack is empty
    if (stack.isEmpty()) {
        console.log(-1);
    } else {
        // print the stack
        console.log(stack.items.join(' '));
    }
    
});

/*  

    words = ['I', 'am', 'john', 'cena', 'cena', 'john']

    traverse through the words array:
        for every word:
            check if the stack is empty:
                push the word to the stack
            else:
                check if the tos() and the current word are equal:
                    pop the stack
                else:
                    push the word to the stack


    stack = ['I', 'am',]



*/