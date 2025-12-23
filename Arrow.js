// arrow-function-practice.js

// ============================
// 1️⃣ Basic Arrow Function
// ============================
const greet = () => {
  console.log("Hello, Arrow Function!");
};
greet();

// ============================
// 2️⃣ Arrow Function with Parameters
// ============================
const add = (a, b) => {
  return a + b;
};
console.log("Add:", add(5, 3)); // 8

// ============================
// 3️⃣ Implicit Return (One Line)
// ============================
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(4, 6)); // 24

// ============================
// 4️⃣ Single Parameter (No brackets)
// ============================
const square = x => x * x;
console.log("Square:", square(5)); // 25

// ============================
// 5️⃣ Arrow Function with Array map()
// ============================
const numbers = [1, 2, 3, 4];
const squares = numbers.map(n => n * n);
console.log("Squares:", squares);

// ============================
// 6️⃣ Arrow Function with filter()
// ============================
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// ============================
// 7️⃣ Arrow Function with reduce()
// ============================
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// ============================
// 8️⃣ Arrow Function Returning Object
// ============================
const createUser = (name, age) => ({
  name: name,
  age: age
});
console.log("User:", createUser("Nihir", 21));

// ============================
// 9️⃣ Arrow Function in setTimeout
// ============================
setTimeout(() => {
  console.log("Executed after 1 second");
}, 1000);

// ============================
// 🔟 Arrow Function vs Normal Function (this)
// ============================
const obj = {
  value: 10,
  show: function () {
    setTimeout(() => {
      console.log("Value:", this.value);
    }, 500);
  }
};
obj.show();
