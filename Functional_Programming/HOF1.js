//higher order function is a function that takes another function as an argument or returns a function as a result.
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

//higher order function that takes another function as an argument(operation)
function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(10, 2, add));
console.log(calculate(10, 2, sub));
console.log(calculate(10, 2, mul));
console.log(calculate(10, 2, div));
