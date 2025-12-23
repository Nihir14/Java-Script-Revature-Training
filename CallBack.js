// Call back is the fnctin passed as a argmennt t anther fnctin, and it is exectd after smthng.
// A fnctin can accept another fnctin as an argmennt.
// A fnctin that is exectd after anther fnctin is clled a call back fnctin.
// Here is an exmple of a call back fnctin in JavaScript:

function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function sayBye() {
    console.log('Goodbye!');
}

greet('Alice', sayBye);

// Output:
// Hello Alice
// Goodbye! 