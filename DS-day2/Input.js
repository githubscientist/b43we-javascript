// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const userInput = [];

// inp.on("line", (data) => {
//   userInput.push(data);
// });

// inp.on("close", () => {
//   //start-here
//   //Your code goes here … replace the below line with your code logic 

//   console.log(userInput);

//   //end-here
// });

inp.question('what is your name? ', (name) => {
    console.log(`your name is ${name}`);
    inp.close();
});

