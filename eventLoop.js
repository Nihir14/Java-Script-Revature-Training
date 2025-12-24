console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("End");
// This code demonstrates the event loop in JavaScript.
// The output will be:
// Start
// End
// Timeout callback