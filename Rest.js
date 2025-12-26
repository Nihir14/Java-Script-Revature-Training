// This is a example of using the rest operator to create a function that accepts a variable number of arguments.

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7, 8)); // 30
// The rest operator collects all remaining arguments into an array, allowing the function to handle any number of arguments.


// This is a example of using the rest operator to destructure an array.

let [first, second, ...rest] = [10, 20, 30, 40, 50];

console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]

// The rest operator collects the remaining elements of the array into a new array.

function multiply(x, y, z) {
    return x * y * z;
}

let nums = [2, 3, 4];

console.log(multiply(...nums)); // 24
// The spread operator allows for easy passing of array elements as individual function arguments.




function display(name, ...skills) {
    console.log(`Name: ${name}`);
    console.log(`Skills: ${skills.join(', ')}`);
}

display('Nihir', 'JavaScript', 'Python', 'C++');


// Name: Nihir
// Skills: JavaScript, Python, C++
// The rest operator collects all additional arguments into the skills array.
