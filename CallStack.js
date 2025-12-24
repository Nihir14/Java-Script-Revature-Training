function first() {
  console.log("First");
}

function second() {
  first();
  console.log("Second");
}

function third() {
  second();
  console.log("Third");
}

third();
// This code demonstrates a simple call stack with three functions calling each other in sequence.
// The output will be:
// First
// Second
// Third

// The call stack works by pushing each function onto the stack when it is called
// and popping it off when it returns, allowing for nested function calls.