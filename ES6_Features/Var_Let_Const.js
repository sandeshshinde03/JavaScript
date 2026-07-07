//var is function-scoped, can be re-declared and updated, and is hoisted with an initial value of undefined.// Re-declaration

var age = 22;
var age = 25; // Allowed

age = 30; // Allowed updating value

if (true) {
  // No block scope
  var city = "Mumbai";
}

// Hoisting
console.log(name); // undefined
var name = "Sandesh";

console.log(age); // 30
console.log(city); // Mumbai
console.log(name); // Sandesh

//let is block-scoped, can be updated but not re-declared in the same scope, and remains in the Temporal Dead Zone until initialization.

// Hoisting with TDZ
// console.log(name); // ReferenceError
let name = "Sandesh";

// Updating value
let city = "Pune";
city = "Mumbai";

if (true) {
  // Block scope
  let x = 10;
  console.log(x); // 10
}

// console.log(x); // ReferenceError (x is block-scoped)

// Re-declaration not allowed
// let city = "Delhi"; // SyntaxError

console.log(name); // Sandesh
console.log(city); // Mumbai

//const is also block-scoped, cannot be re-declared or reassigned, must be initialized during declaration, and is mainly used for constant values.

// Hoisting with TDZ
// console.log(PI); // ReferenceError

const PI = 3.14;
// const country; // SyntaxError

if (true) {
  // Block scope
  const city = "Pune";
  console.log(city); // Pune
}

// console.log(city); // ReferenceError

// const objects can have mutable properties
const person = {
  name: "Sandesh",
  age: 22,
};

person.age = 23; // Allowed

console.log(person); //name: "Sandesh", age: 23

// person = {}; // TypeError

// const PI = 3.14159; // SyntaxError

console.log(PI); // 3.14
