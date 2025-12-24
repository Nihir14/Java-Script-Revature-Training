// Synchronous
console.log("A");
console.log("B");
console.log("C");

// Asynchronous
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");
// Output:
// A
// B    
// C
// Start
// End
// Async Task (after 1 second)