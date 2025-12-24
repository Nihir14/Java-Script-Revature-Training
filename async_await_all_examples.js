/****************************************
 * 1️⃣ async FUNCTION BASICS
 ****************************************/
console.log("1️⃣ async function basics");

async function greet() {
  return "Hello from async function";
}

greet().then(result => console.log(result));



/****************************************
 * 2️⃣ await WITH PROMISE
 ****************************************/
console.log("\n2️⃣ await with Promise");

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
}

async function getData() {
  let data = await fetchData();
  console.log(data);
}

getData();



/****************************************
 * 3️⃣ ERROR HANDLING (try / catch)
 ****************************************/
console.log("\n3️⃣ Error handling with try/catch");

function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("Division by zero error");
    else resolve(a / b);
  });
}

async function calculate() {
  try {
    let result = await divide(10, 0);
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

calculate();



/****************************************
 * 4️⃣ MULTIPLE await (SEQUENTIAL)
 ****************************************/
console.log("\n4️⃣ Sequential execution");

function task(value, time) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), time);
  });
}

async function sequentialTasks() {
  let a = await task(1, 500);
  let b = await task(2, 500);
  let c = await task(3, 500);
  console.log("Result:", a + b + c);
}

sequentialTasks();



/****************************************
 * 5️⃣ PARALLEL EXECUTION (Promise.all)
 ****************************************/
console.log("\n5️⃣ Parallel execution");

async function parallelTasks() {
  let results = await Promise.all([
    task(1, 1000),
    task(2, 1000),
    task(3, 1000)
  ]);
  console.log("Results:", results);
}

parallelTasks();



/****************************************
 * 6️⃣ CALLBACK HELL (PROBLEM)
 ****************************************/
console.log("\n6️⃣ Callback Hell");

function cbTask(msg, cb) {
  setTimeout(() => {
    console.log(msg);
    cb();
  }, 500);
}

cbTask("Task 1", () => {
  cbTask("Task 2", () => {
    cbTask("Task 3", () => {
      console.log("Done (Callback Hell)");
    });
  });
});



/****************************************
 * 7️⃣ SAME USING async / await (SOLUTION)
 ****************************************/
console.log("\n7️⃣ async/await solution");

function promiseTask(msg) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 500);
  });
}

async function runTasks() {
  await promiseTask("Task 1");
  await promiseTask("Task 2");
  await promiseTask("Task 3");
  console.log("Done (async/await)");
}

runTasks();



/****************************************
 * 8️⃣ async FUNCTION ALWAYS RETURNS PROMISE
 ****************************************/
console.log("\n8️⃣ async always returns Promise");

async function sample() {
  return 100;
}

console.log(sample()); // Promise
sample().then(res => console.log("Resolved:", res));
