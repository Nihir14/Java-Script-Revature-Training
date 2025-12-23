// Basic setTimeout example
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("This runs immediately");

// Example with a named function
function greet(name) {
    console.log(`Hello, ${name}!`);
}

setTimeout(() => {
    greet("Alice");
}, 1000);

// Clear a timeout before it executes
const timeoutId = setTimeout(() => {
    console.log("This might not run");
}, 3000);

clearTimeout(timeoutId); // Cancels the timeout