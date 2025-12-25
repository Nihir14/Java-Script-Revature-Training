let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3
    },
    e: [4, 5, 6]
}

let obj2 = JSON.parse(JSON.stringify(obj));

obj2.b.c = 20;
obj2.e.push(7);

console.log(obj.b.c); // 2
console.log(obj.e);   // [4, 5, 6]

console.log(obj2.b.c); // 20
console.log(obj2.e);   // [4, 5, 6, 7]

// The original object remains unchanged, demonstrating a deep clone.

// Note: This method does not handle functions, undefined, or special object types like Date or RegExp.