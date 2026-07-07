//Normal function declaration
function greet() {
  console.log("Hello");
}
greet(); //function call

//function with parameters
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));

//function redeclaration
function greet() {
  console.log("hi there");
}
greet(); // this will overwrite the previous greet function and print "hi there"
