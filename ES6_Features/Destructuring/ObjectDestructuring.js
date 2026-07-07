//Object Destructuring

let person = {
  firstName: "Sandesh",
  lastName: "Shinde",
  city: "Satara",
  pincode: 412805,
};

let { firstName, lastName, city, pincode } = person;

console.log(`firstName: ${firstName} Lastname: ${lastName}`);
console.log(`city: ${city} pincode: ${pincode}`);
