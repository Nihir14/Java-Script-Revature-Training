/******************************************************
 * JavaScript Loop Practice File
 * Author: Nihir (Practice File)
 * Purpose: Practicing loops step by step
 ******************************************************/

console.log("========== LOOP PRACTICE START ==========");

/* ==================================================
   FOR LOOP PRACTICE
   ================================================== */

// Example 1: Print numbers from 1 to 5
console.log("\nExample 1: Print numbers from 1 to 5");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Example 2: Print even numbers from 1 to 10
console.log("\nExample 2: Print even numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Example 3: Print sum of first 5 numbers
console.log("\nExample 3: Sum of first 5 numbers");
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum =", sum);

// Example 4: Print elements of an array
console.log("\nExample 4: Print array elements");
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/* ==================================================
   WHILE LOOP PRACTICE
   ================================================== */

// Example 5: Print numbers from 1 to 5
console.log("\nExample 5: Print numbers from 1 to 5 using while loop");
let num1 = 1;
while (num1 <= 5) {
    console.log(num1);
    num1++;
}

// Example 6: Print odd numbers from 1 to 10
console.log("\nExample 6: Print odd numbers from 1 to 10");
let num2 = 1;
while (num2 <= 10) {
    if (num2 % 2 !== 0) {
        console.log(num2);
    }
    num2++;
}

// Example 7: Reverse count from 5 to 1
console.log("\nExample 7: Reverse counting from 5 to 1");
let num3 = 5;
while (num3 >= 1) {
    console.log(num3);
    num3--;
}

/* ==================================================
   DO WHILE LOOP PRACTICE
   ================================================== */

// Example 8: Print numbers from 1 to 5
console.log("\nExample 8: Print numbers from 1 to 5 using do-while");
let num4 = 1;
do {
    console.log(num4);
    num4++;
} while (num4 <= 5);

// Example 9: Print table of 2
console.log("\nExample 9: Table of 2");
let num5 = 1;
do {
    console.log("2 x " + num5 + " = " + (2 * num5));
    num5++;
} while (num5 <= 10);

// Example 10: Print array elements using do-while
console.log("\nExample 10: Print array elements using do-while");
let index = 0;
let colors = ["Red", "Green", "Blue"];
do {
    console.log(colors[index]);
    index++;
} while (index < colors.length);

// Example 11: Run loop at least once
console.log("\nExample 11: Do-while runs at least once");
let number = 10;
do {
    console.log("Number is:", number);
} while (number < 5);

console.log("\n========== LOOP PRACTICE END ==========");
