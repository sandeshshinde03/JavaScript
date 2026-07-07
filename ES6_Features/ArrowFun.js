//Traditional Function
function add(a, b) {
  return a + b;
}
console.log("Traditional Function:", add(2, 3));
//Arrow Function
const addArrow = (a, b) => {
  return a + b;
};
console.log("Arrow Function:", addArrow(2, 3));

//Single-Line Arrow Function
const square = (n) => n * n;
console.log("Square of 4:", square(4));
