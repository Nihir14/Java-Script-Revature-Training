// What are the difference between decalaration and expression in terms of hoisting in JavaScript?In JavaScript, the main difference between function declarations and function expressions in terms of hoisting is how they are treated during the compilation phase before the code is executed.

// 1. **Function Declarations**:
// Function declarations are hoisted completely. This means that the entire function definition is moved to the top of its containing scope during the compilation phase. As a result, you can call a function declared in this way before its actual declaration in the code.

// Example of Function Declaration Hoisting

console.log(declaredFunction()); // Output: "This is a declared function."

function declaredFunction() {
    return "This is a declared function.";
}   

// 2. **Function Expressions**:
// Function expressions, on the other hand, are not hoisted in the same way. Only the variable declaration is hoisted, not the assignment of the function to that variable. This means that if you try to call a function expression before it is defined, you will get an error because the variable is undefined at that point.

console.log(expressionFunction()); // Throws TypeError: expressionFunction is not a function

var expressionFunction = function() {
    return "This is an expression function.";
};

// In summary, function declarations are fully hoisted and can be called before they are defined, while function expressions are not hoisted in the same way, and attempting to call them before their definition will result in an error.


// Convert a function into arrow function

// Regular function
function add(a, b) {
    return a + b;
}   

// Converted to arrow function
const add = (a, b) => a + b;

// Regular function
function greet(name) {
    return "Hello, " + name + "!";
}

// Converted to arrow function
const greet = name => "Hello, " + name + "!";


function val (num, num2, num3){
    console.log(num + num2 + num3);
}

val(2, 3);
// If the number of arguments passed is less than the number of parameters defined in the function, the missing parameters will be assigned the value undefined. In this case, num3 will be undefined, and when you try to add it to num and num2, the result will be NaN (Not a Number) because adding a number to undefined results in NaN.

// To handle such cases, you can provide default values for parameters or check for undefined values within the function. Here's an example with default parameters:    

function val (num, num2, num3 = 0){
    console.log(num + num2 + num3);
}

val(2, 3); // Output: 5
// In this modified version, if num3 is not provided, it defaults to 0, ensuring that the addition operation works as expected.

//  Use rest parameters to create a function that can take any number of arguments and returns their sum.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}


//  Pass a function into another function as an argument and invoke it within the outer function.

function outerFunction(callback) {
    console.log("Before invoking the callback.");
    callback();
    console.log("After invoking the callback.");
}

function myCallback() {
    console.log("This is the callback function.");
}

outerFunction(myCallback);

