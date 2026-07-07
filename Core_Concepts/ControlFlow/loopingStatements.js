//Control flow
//Looping statements

//for loop
//Used when we know how many times you want to repeat.
for (let i = 1; i <= 10; i++) {
  console.log(2 * i);
}

//while loop
//Used when we don't know how many times we want to repeat.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//do while loop
//executes the code at least once, then checks the condition
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

//for of loop
//Used to iterate over iterable like arrays, strings, etc.
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

let name = "sandesh";
for (let letter of name) {
  console.log(letter);
}

//for in loop
//Used to iterate over the properties/keys of an object.
const person = {
  name: "Sandesh",
  age: 23,
  city: "Pune",
};

for (const key in person) {
  console.log(key, person[key]);
}
