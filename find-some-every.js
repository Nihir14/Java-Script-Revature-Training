// find-some-every.js

// ============================
// Sample Data
// ============================
const numbers = [2, 4, 6, 7, 10];
const users = [
  { id: 1, name: "Nihir", age: 21 },
  { id: 2, name: "Aman", age: 17 },
  { id: 3, name: "Rohit", age: 25 }
];

// ============================
// 1️⃣ FIND
// ============================
// find() returns FIRST element that matches condition
const firstOdd = numbers.find(num => num % 2 !== 0);
console.log("Find (First Odd):", firstOdd); // 7

const userFound = users.find(user => user.id === 2);
console.log("Find (User):", userFound);
// { id: 2, name: 'Aman', age: 17 }

// ============================
// 2️⃣ SOME
// ============================
// some() returns true if AT LEAST ONE element matches
const hasMinor = users.some(user => user.age < 18);
console.log("Some (Any Minor?):", hasMinor); // true

const hasNegative = numbers.some(num => num < 0);
console.log("Some (Any Negative?):", hasNegative); // false

// ============================
// 3️⃣ EVERY
// ============================
// every() returns true if ALL elements match
const allEven = numbers.every(num => num % 2 === 0);
console.log("Every (All Even?):", allEven); // false

const allAdults = users.every(user => user.age >= 18);
console.log("Every (All Adults?):", allAdults); // false

// ============================
// 4️⃣ Real World Example
// ============================
// Check if all students passed
const marks = [65, 72, 80, 40];
const allPassed = marks.every(mark => mark >= 35);
console.log("Every (All Passed?):", allPassed); // true

// Check if any student failed
const anyFailed = marks.some(mark => mark < 35);
console.log("Some (Any Failed?):", anyFailed); // false
