# Java-Script-Revature-Training

# JavaScript Training – Core Concepts (Before DOM)

This repository contains JavaScript concepts covered during my ongoing Revature training.
Basic fundamentals were explained in class, and this README documents them in a structured,
in-depth manner along with advanced core concepts required before DOM Manipulation.

> Note: DOM-related topics are maintained in a separate repository.

---

## Basic Concepts (Already Covered in Training)

### Variables
```javascript
var x = 10;
let y = 20;
const z = 30;
var is function scoped and hoisted

let is block scoped

const is block scoped and cannot be reassigned

Data Types
Number

String

Boolean

Undefined

Null

Object

Operators
Arithmetic Operators: + - * / %

Comparison Operators: == === != > <

Logical Operators: && || !

Conditional Statements
javascript
Copy code
let age = 21;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}
Loops
For Loop
javascript
Copy code
for (let i = 0; i < 5; i++) {
  console.log(i);
}
While Loop
javascript
Copy code
let count = 0;
while (count < 3) {
  count++;
}
Do-While Loop
javascript
Copy code
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 3);
Functions in JavaScript
Normal Function
javascript
Copy code
function add(a, b) {
  return a + b;
}
Function Expression
javascript
Copy code
const multiply = function(a, b) {
  return a * b;
};
Arrow Function
javascript
Copy code
const subtract = (a, b) => a - b;
Object Creation in JavaScript
Objects store data in key–value pairs and represent real-world entities.

Object Literal (Most Common)
javascript
Copy code
const person = {
  name: "Nihir",
  age: 21,
  role: "Trainee"
};
Using new Object()
javascript
Copy code
const company = new Object();
company.name = "Cognizant";
company.location = "India";
Constructor Function
javascript
Copy code
function Employee(name, id) {
  this.name = name;
  this.id = id;
}

const emp1 = new Employee("Rahul", 101);
Classes in JavaScript (ES6)
Classes provide a cleaner and more structured way to create objects.

javascript
Copy code
class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  display() {
    console.log(this.name, this.rollNo);
  }
}

const s1 = new Student("Amit", 12);
s1.display();
Key Points
constructor() initializes object values

this refers to the current object

Classes improve readability and maintainability

Arrays in JavaScript
Arrays store multiple values in a single variable.

Array Creation
javascript
Copy code
const numbers = [10, 20, 30, 40];
const skills = new Array("JavaScript", "HTML", "CSS");
const data = [1, "JS", true, null];
Accessing and Updating Array Elements
javascript
Copy code
console.log(numbers[0]);
numbers[1] = 25;
Array Methods
javascript
Copy code
const arr = [1, 2, 3, 4];

arr.push(5);
arr.pop();

const doubled = arr.map(n => n * 2);
const even = arr.filter(n => n % 2 === 0);
const sum = arr.reduce((a, b) => a + b, 0);
Scope and Hoisting
javascript
Copy code
console.log(a);
var a = 10;
var is hoisted

let and const are block scoped

Closures
javascript
Copy code
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();
counter();
Closures allow a function to access variables from its outer scope even after execution.

Callback Functions
javascript
Copy code
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData(data => console.log(data));
Callbacks are functions passed as arguments and executed later.

Promises
javascript
Copy code
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));
Promises handle asynchronous operations in a cleaner way.

Async and Await
javascript
Copy code
function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data Loaded"), 1000);
  });
}

async function fetchData() {
  const result = await getData();
  console.log(result);
}

fetchData();
Async/Await makes asynchronous code look synchronous.

Error Handling
javascript
Copy code
try {
  let x = y + 10;
} catch (error) {
  console.log("Error occurred");
} finally {
  console.log("Execution completed");
}
Timers
javascript
Copy code
setTimeout(() => {
  console.log("Executed after 1 second");
}, 1000);

setInterval(() => {
  console.log("Repeats every 2 seconds");
}, 2000);
JSON
javascript
Copy code
const jsonData = '{"name":"Nihir","age":21}';
const obj = JSON.parse(jsonData);
const str = JSON.stringify(obj);
JSON is used for data exchange between client and server.

Summary
JavaScript fundamentals completed

Objects, Classes, and Arrays covered in depth

Asynchronous JavaScript mastered

Ready to move into DOM Manipulation

Training Status
JavaScript basics completed

Objects, Classes, Arrays completed

Callbacks, Promises, Async/Await completed

DOM handled in a separate repository