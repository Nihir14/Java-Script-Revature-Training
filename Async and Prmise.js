// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true; // change to false to see error case
 
  setTimeout(() => {
    if (success) {
      resolve("Operation completed successfully!");
    } else {
      reject("Operation failed!");
    }
  }, 2000);
});
 
 
// Creating an async function
async function performOperation() {
  try {
    const result = await myPromise;
    console.log(result); // "Operation completed successfully!"
  } catch (error) {
    console.log(error);
  }
}
 
// Calling the async function
performOperation();