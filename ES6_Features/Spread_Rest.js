// Spread Operator (...)

//Merging Arrays
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express.js"];

const fullStack = [...frontend, ...backend];

console.log("Merged Array:");
console.log(fullStack);

//Copying Arrays
const numbers = [10, 20, 30];
const copiedNumbers = [...numbers];
copiedNumbers.push(40);

console.log("Original Array:", numbers);
console.log("Copied Array:", copiedNumbers);

//Merging Objects
const person = {
  name: "Sandesh",
  age: 22,
};

const updatedPerson = {
  ...person,
  city: "Pune",
};

console.log("Updated Object:");
console.log(updatedPerson);

//Overriding Object Properties
const user = {
  name: "Sandesh",
  age: 22,
};

const newUser = {
  ...user,
  age: 23,
};

console.log("Overridden Object:");
console.log(newUser);

//Spread with Function Arguments
const marks = [85, 92, 78, 95];

const highestMark = Math.max(...marks);

console.log("Highest Mark:");
console.log(highestMark); //95

// Rest Operator (...)

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:");
console.log(sum(10, 20));
console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40));

// Array Destructuring with Rest
const colors = ["Red", "Green", "Blue", "Yellow", "Black"];

const [firstColor, secondColor, ...remainingColors] = colors;

console.log("First Color:", firstColor);
console.log("Second Color:", secondColor);
console.log("Remaining Colors:", remainingColors);

//Object Destructuring with Rest
const student = {
  name: "Sandesh",
  age: 22,
  city: "Pune",
  course: "Information Technology",
};

const { name, ...otherDetails } = student;

console.log("Name:", name);
console.log("Other Details:");
console.log(otherDetails);
