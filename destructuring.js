// This is a example of using the rest operator to destructure an object.

let { a, b, ...rest } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};

console.log(a); // 1
console.log(b); // 2
console.log(rest); // { c: 3, d: 4, e: 5 }

// The rest operator collects the remaining properties of the object into a new object.

function introduce({ name, age, ...details }) {

    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log('Details:', details);
}   

introduce({
    name: 'Alice',
    age: 30,
    city: 'New York',
    profession: 'Engineer'
});

// Name: Alice
// Age: 30
// Details: { city: 'New York', profession: 'Engineer' }
// The rest operator collects the remaining properties into the details object.

// This is example of using the rest operator to create a array that accepts a variable number of elements.

let numbers = [1, 2, 3, 4, 5];
let [first, second, ...others] = numbers;
console.log(first); // 1
console.log(second);
console.log(others); // [3, 4, 5]

