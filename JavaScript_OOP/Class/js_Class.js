//A class is a blueprint used to create objects that share similar properties and methods
//The constructor runs automatically whenever you create a new object with new keyword. It is used to initialize the properties of the object.

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  study() {
    console.log(`${this.name} is studying JavaScript`);
  }
}

//new keyword is used to create an object from a class
const student1 = new Student("Sandesh", 22);
const student2 = new Student("Amol", 23);
console.log(student1.name);
console.log(student2.name);

student1.study();
student2.study();
