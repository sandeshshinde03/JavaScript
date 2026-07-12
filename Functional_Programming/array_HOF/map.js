//map() Returns a new array after applying a function to every element.

//find square of each number
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const square = numbers.map((num) => {
  return num * num;
});

console.log(square);

//Convert all names to uppercase
const fruits = ["apple", "banana", "mango"];

const upperCase = fruits.map((f) => {
  return f.toUpperCase();
});

console.log(upperCase);

//add GST 18 %
const prices = [500, 1000, 1500];

const priceWithGSt = prices.map((price) => {
  return price + price * 0.18;
});

console.log(priceWithGSt);

//extract the names from object
const users = [
  { id: 1, name: "Sandesh" },
  { id: 2, name: "Rutik" },
  { id: 3, name: "Sahil" },
];

const userNames = users.map((user) => {
  return user.name;
});

console.log(userNames);
