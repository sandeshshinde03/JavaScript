const numbers = [10, 20, 30, 40];
const fruits = ["apple", "banana", "mango"];

const user = {
  id: 1,
  name: "Rutik",
  age: 25,
  city: "Mumbai",
};

function getMarks() {
  return [85, 90, 95];
}

function getNickname() {
  return null;
}

function isEven(num) {
  return num % 2 === 0;
}

function getUser() {
  return {
    name: "Sandesh",
    age: 22,
  };
}

module.exports = {
  numbers,
  fruits,
  user,
  isEven,
  getUser,
  getMarks,
  getNickname,
};
