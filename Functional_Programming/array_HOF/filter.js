// filter() is used to keep only the elements that satisfy a condition. It always returns a new array.
// 1) Filter Even Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNum = numbers.filter((num) => {
  if (num % 2 === 0) {
    return num;
  }
});
console.log(evenNum);

// 2) Keep words whose length is greater than 5.
const words = ["JavaScript", "HTML", "CSS", "React", "NodeJS"];

const words2 = words.filter((word) => {
  if (word.length > 5) {
    return word;
  }
});
console.log(words2);

// 3)Keep students who scored at least 35.
const students = [
  { name: "Sandesh", marks: 25 },
  { name: "Sahil", marks: 45 },
  { name: "Rutik", marks: 70 },
  { name: "Ram", marks: 30 },
];

const passStudent = students.filter((student) => {
  if (student.marks >= 35) {
    return student;
  }
});
console.log(passStudent);

// 4) give only active users
const users = [
  { name: "Sandesh", active: true },
  { name: "Sahil", active: false },
  { name: "Rutik", active: true },
  { name: "Ram", active: false },
];

const activeUsers = users.filter((user) => {
  return user.active === true;
});

console.log(activeUsers);
