// IIFE (Immediately Invoked Function Expression)

(function () {
    // Code inside this function is executed immediately
    // and has its own scope.
    const message = "Hello, World!";
    console.log(message);
})();


(function () {
    console.log("This function runs immediately upon definition!");
})();

// The variable 'message' is not accessible outside the IIFE
// console.log(message); // This would throw a ReferenceError   

// Another example with parameters

const counter = (function () {
    let count = 0;
    return {
        increment() {
            count++;
            console.log(count);
        },
        decrement() {
            count--;
            console.log(count);
        }
    }
})();

counter.count; // undefined, as 'count' is private
counter.increment();    // Outputs: 1
counter.increment();    // Outputs: 2
counter.decrement();    // Outputs: 1