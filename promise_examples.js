/***************************************
 * 1️⃣ BASIC PROMISE
 ***************************************/
console.log("1️⃣ BASIC PROMISE");

let basicPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Basic Promise Resolved");
  } else {
    reject("Basic Promise Rejected");
  }
});

basicPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));



/***************************************
 * 2️⃣ PROMISE WITH setTimeout (ASYNC)
 ***************************************/
console.log("\n2️⃣ PROMISE WITH setTimeout");

function asyncPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async operation completed");
    }, 1000);
  });
}

asyncPromise()
  .then(result => console.log(result))
  .catch(error => console.log(error));



/***************************************
 * 3️⃣ PROMISE REJECTION
 ***************************************/
console.log("\n3️⃣ PROMISE REJECTION");

function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Error: Division by zero");
    } else {
      resolve(a / b);
    }
  });
}

divide(10, 0)
  .then(result => console.log("Result:", result))
  .catch(error => console.log(error));



/***************************************
 * 4️⃣ PROMISE CHAINING
 ***************************************/
console.log("\n4️⃣ PROMISE CHAINING");

function step(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value + 1);
    }, 500);
  });
}

step(1)
  .then(result => {
    console.log(result);
    return step(result);
  })
  .then(result => {
    console.log(result);
    return step(result);
  })
  .then(result => console.log(result));



/***************************************
 * 5️⃣ CALLBACK HELL (PROBLEM)
 ***************************************/
console.log("\n5️⃣ CALLBACK HELL");

function task1(cb) {
  setTimeout(() => {
    console.log("Task 1 done");
    cb();
  }, 500);
}

function task2(cb) {
  setTimeout(() => {
    console.log("Task 2 done");
    cb();
  }, 500);
}

function task3(cb) {
  setTimeout(() => {
    console.log("Task 3 done");
    cb();
  }, 500);
}

task1(() => {
  task2(() => {
    task3(() => {
      console.log("All tasks completed (Callback Hell)");
    });
  });
});



/***************************************
 * 6️⃣ SAME LOGIC USING PROMISE (SOLUTION)
 ***************************************/
console.log("\n6️⃣ PROMISE SOLUTION TO CALLBACK HELL");

function promiseTask(message) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 500);
  });
}

promiseTask("Task 1 done")
  .then(() => promiseTask("Task 2 done"))
  .then(() => promiseTask("Task 3 done"))
  .then(() => console.log("All tasks completed (Promise)"));



/***************************************
 * 7️⃣ ASYNC / AWAIT (BUILT ON PROMISES)
 ***************************************/
console.log("\n7️⃣ ASYNC / AWAIT");

async function asyncExample() {
  try {
    let result1 = await promiseTask("Async Task 1");
    let result2 = await promiseTask("Async Task 2");
    let result3 = await promiseTask("Async Task 3");
    console.log("All tasks completed (Async/Await)");
  } catch (error) {
    console.log(error);
  }
}

asyncExample();



/***************************************
 * 8️⃣ PROMISE STATES DEMO
 ***************************************/
console.log("\n8️⃣ PROMISE STATES");

let statePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Fulfilled");
  }, 1000);
});

console.log(statePromise); // pending

statePromise.then(result => console.log(result));
