console.log("Start");

setTimeout(() => {
  console.log("Callback from queue");
}, 0);

for (let i = 0; i < 1000000000; i++) {} // blocking

console.log("End");
// This code demonstrates the event loop and callback queue in JavaScript.
// The output will be:
// Start
// End
// Callback from queue