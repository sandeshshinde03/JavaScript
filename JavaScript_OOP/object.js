//an object is a collection of related properties, and related methods (functions).
//an oobject is a instance of a class that represents a real-world entity.
const student = {
  name: "Sandesh",
  rollNo: 101,
  course: "Bachelor of Engineering in Information Technology",

  study() {
    console.log("Studying JavaScript...");
  },

  attendClass() {
    console.log("Attending Class...");
  },
};

//Accessing Properties
console.log(student.name);
console.log(student["course"]);

student.study();
student.attendClass();

//Adding New Properties
student.age = 22;
console.log(student);

//Updating Properties
student.course = "BE in Information Technology";
console.log(student);

//Deleting Properties
delete student.age;
console.log(student);
