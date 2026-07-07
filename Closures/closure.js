//A closure is created when an inner function remembers and retains access to variables from its outer scope even after the outer function has finished executing.
function outer() {
  let count = 0;

  return function inner() {
    //it will remember the count variable forever, even after the outer function has finished executing
    count++;
    return count;
  };
}

const counter = outer();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
