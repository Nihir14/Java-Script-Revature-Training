// map-filter-reduce.js

// Original array
const numbers = [1, 2, 3, 4, 5, 6];

// --------------------
// MAP
// --------------------
// map transforms each element
const squaredNumbers = numbers.map(num => num * num);
console.log("Map (Squares):", squaredNumbers);
// Output: [1, 4, 9, 16, 25, 36]

// --------------------
// FILTER
// --------------------
// filter selects elements based on condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Filter (Even Numbers):", evenNumbers);
// Output: [2, 4, 6]

// --------------------
// REDUCE
// --------------------
// reduce combines all elements into a single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Reduce (Sum):", sum);
// Output: 21

// --------------------
// COMBINED EXAMPLE
// --------------------
// 1. Filter even numbers
// 2. Square them
// 3. Find total
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((total, num) => total + num, 0);

console.log("Filter + Map + Reduce Result:", result);
// Output: 56
