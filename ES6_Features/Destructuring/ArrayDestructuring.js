//Destructuring assignment is used to unpack values from arrays or properties from objects into distinct variables.

//Array Destructuring
let arr = ["sandesh", "shinde", "Satara", 412805];
let [firstName, lastName, city, pincode] = arr; //Array Destructuring
console.log(`firstName: ${firstName} lastName: ${lastName}`);
console.log(`city: ${city} pincode: ${pincode}`);

//skipping elements
let colors = ["Red", "Green", "Blue"];
let [first, , third] = colors;

console.log(first);
console.log(third);
