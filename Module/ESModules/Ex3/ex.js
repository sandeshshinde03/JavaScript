//Export Classes
export class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(this.name);
    console.log(this.age);
  }
}

//Export Objects
export const person = {
  name: "Sandesh",
  age: 22,
  city: "Pune",
};
