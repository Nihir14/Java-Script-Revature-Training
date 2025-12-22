// let a = 20;
// let b = 20;

// console.log(a + b);
// console.log("Welcome to Rev.js");

// // Output:
// // 40   
const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter a name: ",(name)=>{
    console.log("Hello, " + name + "!");
    rl.close();
});