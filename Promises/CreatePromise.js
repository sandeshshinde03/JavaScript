//callback hell is a situation where we have multiple nested callbacks which makes the code hard to read and maintain. It occurs when we have asynchronous operations that depend on the results of previous operations, leading to deeply nested code structures.
//To solve problem of callback hell, we can use promises.
//A Promise is an object that represents the eventual completion (success) or failure of an asynchronous operation.
/*Pending : result is undefined.
Resolved : result is a value (fulfilled) .
Rejected : result is an error object (rejected).*/

// 1) Creating a Promise
let promise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Promise fulfilled");
  } else {
    reject("promise rejected");
  }
});

// 2) Consuming a promise
promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
