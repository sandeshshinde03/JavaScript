//Object.create() is a built-in JavaScript method that creates a new object and sets the specified object as its prototype.
const person = {
  country: "India",
  sayHello() {
    console.log("Hello!");
  },
};

const student = Object.create(person);

student.name = "Sandesh";
student.age = 22;

console.log(student.name);
console.log(student.country);
student.sayHello();

//country is not copied into student, it is inherited.
console.log(student); // { name: 'Sandesh', age: 22 }
