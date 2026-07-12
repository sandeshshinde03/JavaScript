//foreach() accepts a callback function and executes it once for each element in the array.
//it does not return anything.
const fruits = ["Apple", "Banana", "Mango"];
function print(n) {
  console.log(n);
}

fruits.forEach(print);

// fruits.forEach(function (element, index, array) {
//   console.log(`Element: ${element} Index: ${index} Array: ${array}`);
// });

// Using an arrow function to access both element and index
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});

fruits.forEach((ele) => {
  console.log(ele);
});

// Array of objects
const users = [
  { name: "Sandesh", age: 22 },
  { name: "Rutik", age: 24 },
  { name: "Sahil", age: 20 },
];

users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old`);
});
