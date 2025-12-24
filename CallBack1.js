// Callback function
function greet(name) {
  console.log("Hello " + name);
}

// Function that accepts callback
function processUser(callback) {
  let userName = "Nihir";
  callback(userName); // calling the callback
}

// Passing function as argument
processUser(greet);
