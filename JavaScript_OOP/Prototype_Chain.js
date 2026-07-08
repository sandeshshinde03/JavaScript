const livingThing = {
  breathe() {
    console.log("Breathing...");
  },
};

const person = Object.create(livingThing);

person.walk = function () {
  console.log("Walking...");
};

const student = Object.create(person);

student.study = function () {
  console.log("Studying...");
};

student.study();
student.walk();
student.breathe();
