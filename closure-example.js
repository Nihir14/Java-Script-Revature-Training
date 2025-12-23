// closure-example.js

// ============================
// 1️⃣ Basic Closure Example
// ============================
function outerFunction() {
  let count = 0; // outer variable

  function innerFunction() {
    count++;
    console.log("Count:", count);
  }

  return innerFunction;
}

const counter = outerFunction();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3

// 👉 innerFunction remembers 'count' even after outerFunction finishes


// ============================
// 2️⃣ Closure with Parameters
// ============================
function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const multiplyBy2 = multiplyBy(2);
const multiplyBy5 = multiplyBy(5);

console.log(multiplyBy2(10)); // 20
console.log(multiplyBy5(10)); // 50


// ============================
// 3️⃣ Real-World Example (Private Variable)
// ============================
function bankAccount(initialBalance) {
  let balance = initialBalance; // private variable

  return {
    deposit(amount) {
      balance += amount;
      console.log("Balance after deposit:", balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log("Balance after withdraw:", balance);
    },
    getBalance() {
      return balance;
    }
  };
}

const account = bankAccount(1000);
account.deposit(500);   // 1500
account.withdraw(300);  // 1200
console.log(account.getBalance()); // 1200


// ============================
// 4️⃣ Closure in setTimeout
// ============================
function delayedMessage(message) {
  setTimeout(() => {
    console.log("Message:", message);
  }, 1000);
}

delayedMessage("Hello Closure!");


// ============================
// 5️⃣ Interview Classic Example (Loop)
// ============================
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("i:", i);
  }, i * 1000);
}
// Output: 1, 2, 3 (because let creates block
