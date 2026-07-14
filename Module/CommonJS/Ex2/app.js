const math = require("./math");

console.log(math.add(10, 2));
console.log(math.sub(10, 2));
console.log(math.mult(10, 2));
console.log(math.div(10, 2));

//destructuring
const { add, sub, mult, div } = require("./math");
console.log("With destructuring");
console.log(add(10, 2));
console.log(sub(10, 2));
console.log(mult(10, 2));
console.log(div(10, 2));
