//Control flow
//Jump statements

//break statement
//Stops a loop.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

//continue statement
//Skips the current iteration and continues with the next one.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

//return statement
//Exits a function and optionally returns a value.
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));
