let a = 10;
let b = 20;

debugger; // execution pauses here

let sum = a + b;
console.log(sum);


function add(x, y) {
  debugger;
  return x + y;
}

add(5, 7);


for (let i = 1; i <= 3; i++) {
  debugger;
  console.log(i);
}


