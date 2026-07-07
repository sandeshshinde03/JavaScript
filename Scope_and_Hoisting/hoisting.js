//JavaScript program runs in two phases:
//1. memory creation phase : In this phase, the JavaScript allocates memory for variables and functions. Variables are initialized with 'undefined' and functions are stored in memory.
//2. code execution phase : In this phase, the JavaScript executes the code line by line. Variables are assigned their actual values and functions are executed when called.

console.log(a); //output : undefined
var a = 10;
console.log(a); //output : 10

console.log(b); //output : ReferenceError
let b = 100;

console.log(c); //output : ReferenceError
const c = 1000;

//Function Hoisting
//Functions are hoisted completely.

greet(); //output : Hello
function greet() {
  console.log("Hello");
}
