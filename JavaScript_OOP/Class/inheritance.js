//One class can use the properties and methods of another class. extends keyword is used to create child class that inherits the properties and methods of parent class.
//super() method is used to call the constructor of parent class.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study() {
    console.log(`${this.name} is studying`);
  }
}

const s1 = new Student("Sandesh", 22, "A");
s1.greet();
console.log(`${s1.name} is in grade ${s1.grade}`);
s1.study();

const s2 = new Student("Rutik", 23, "B");
s2.greet();
console.log(`${s2.name} is in grade ${s2.grade}`);
s2.study();
