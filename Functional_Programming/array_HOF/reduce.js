//Sum of Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(`Sum: ${sum}`);

//Find Maximum Number

const max = numbers.reduce((largest, num) => {
  if (num > largest) {
    return num;
  } else {
    return largest;
  }
}, numbers[0]);

console.log(`Largest Number: ${max}`);

//Count Total Characters
const names = ["Sandesh", "Rutik", "Sahil"];

const totalCount = names.reduce((count, name) => {
  return count + name.length;
}, 0);

console.log(`Total characters: ${totalCount}`);

//Count Passed Students
const students = [
  { name: "A", passed: true },
  { name: "B", passed: false },
  { name: "C", passed: true },
];

const passCount = students.reduce((total, student) => {
  return student.passed ? total + 1 : total;
}, 0);
console.log(passCount);
