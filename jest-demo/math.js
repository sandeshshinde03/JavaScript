function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  if (b === 0) {
    throw new Error("divide by zero error");
  }
  return a / b;
}

module.exports = { add, sub, mult, div };
