// calculator.js
const readline = require("readline");

// Class definition for Calculator

class Calc {
  add(a, b) {
    return a + b;
  }

  sub(a, b) {
    return a - b;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calc = new Calc();

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Choose operation (+ or -): ", (op) => {

      const a = Number(num1);
      const b = Number(num2);
      let result;

      if (op === "+") {
        result = calc.add(a, b);
      } else if (op === "-") {
        result = calc.sub(a, b);
      } else {
        console.log("Invalid operation");
        rl.close();
        return;
      }

      console.log("Result:", result);
      rl.close();
    });
  });
});
