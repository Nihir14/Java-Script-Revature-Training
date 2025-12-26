// This is a example of using the spread operator to create a shallow copy of an object.

let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3
    },
    e: [4, 5, 6]
}

let obj2 = { ...obj };

obj2.b.c = 20;
obj2.e.push(7); 

console.log(obj.b.c); // 20
console.log(obj.e);   // [4, 5, 6, 7]

console.log(obj2.b.c); // 20
console.log(obj2.e);   // [4, 5, 6, 7]

// The original object is affected by changes to nested objects/arrays in the copied object, demonstrating that this is a shallow copy.

// Note: The spread operator only creates a shallow copy. For deep cloning, consider using other methods like JSON serialization or libraries designed for deep cloning.


// This is a example of using the spread operator to merge two arrays.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArr = [...arr1, ...arr2];

console.log(mergedArr); // [1, 2, 3, 4, 5, 6]
// The spread operator allows for easy merging of arrays. 

// This is a example of using the spread operator to pass array elements as function arguments.