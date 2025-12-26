# Java-Script-Revature-Training

# JavaScript Training – Core Concepts

This repository contains JavaScript concepts covered during my ongoing training program.
Basic fundamentals have already been explained in class, and this file documents them
along with core topics like **Object Creation, Classes, and Array Creation**.

---

## ✅ Basic Concepts (Already Covered in Training)

### 🔹 Variables
```javascript
var x = 10;
let y = 20;
const z = 30;

🔹 Data Types

Number

String

Boolean

Undefined

Null

Object

🔹 Operators

Arithmetic: + - * / %

Comparison: == === != > <

Logical: && || !

🔹 Conditional Statements
let age = 21;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

🔹 Loops
For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

While Loop
let count = 0;
while (count < 3) {
  count++;
}

Do-While Loop
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 3);

🟦 Object Creation in JavaScript

Objects store data in key–value pairs.

1️⃣ Object Literal (Most Common)
const person = {
  name: "Nihir",
  age: 21,
  role: "Trainee"
};

2️⃣ Using new Object()
const company = new Object();
company.name = "Cognizant";
company.location = "India";

3️⃣ Constructor Function
function Employee(name, id) {
  this.name = name;
  this.id = id;
}

const emp1 = new Employee("Rahul", 101);

🟦 Classes in JavaScript (ES6)

Classes are blueprints for creating objects.

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

📌 Key Points

constructor() initializes object values

this refers to the current object

Classes improve readability and structure

🟦 Array Creation in JavaScript

Arrays store multiple values in a single variable.

1️⃣ Array Literal (Recommended)
const numbers = [10, 20, 30, 40];

2️⃣ Using new Array()
const skills = new Array("JavaScript", "HTML", "CSS");

3️⃣ Mixed Data Array
const data = [1, "JS", true, null];

🔹 Accessing Array Elements
console.log(numbers[0]); // 10

🔹 Updating Array Elements
numbers[1] = 25;

📌 Summary

Variables store data

Operators perform operations

Loops control execution flow

Objects store structured data

Classes create reusable models

Arrays manage collections of data

🚀 Training Status

✔ JavaScript basics completed
✔ Objects, Classes, Arrays covered
✔ Hands-on practice ongoing