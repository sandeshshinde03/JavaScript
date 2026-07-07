//Global scope
//variable declared outside any function or block.
//It can be accessed from anywhere in the code.
let name = "Sandesh";

function show() {
  console.log(name);
}
show();
console.log("Name:", name);



//Function scope
//variable declared using var inside a function are only accessible inside that function.
function test() {
  var age = 22;
  console.log(age);
}
test();
//console.log(age);  // ReferenceError: age is not defined



//Block Scope
//anything inside { }
//Variables declared with let and const can only be accessed within the block {}
if (true) {
  let city = "Pune";
  console.log(city);
}
//console.log(city);  //ReferenceError: city is not defined
