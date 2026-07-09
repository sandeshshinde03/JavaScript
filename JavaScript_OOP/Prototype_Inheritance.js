// Every JavaScript object has an internal reference (called [[Prototype]]) that points to another object.

// When you try to access a property, JavaScript first looks in the object itself. If it doesn't find the property, it follows the prototype link and looks there. This process continues until the property is found or the prototype chain ends (null).
// This is known as prototype chain or prototype lookup.

// Grandparent object
const p1 = {
  xp1: "Inside p1",
};

// Parent object
// p2 inherits from p1
const p2 = {
  xp2: "Inside p2",
  __proto__: p1,
};

// Child object
//p3 inherits from p2 thats why it can access properties of p2 and p1
const p3 = {
  xp3: "Inside p3",
  __proto__: p2,
};

console.log(`using p1: ${p1.xp1}`); //p1 can access only its own property

console.log(`using p2: ${p2.xp1}`); //p2 can access property of p1 and its own
console.log(`using p2: ${p2.xp2}`);

console.log(`using p3: ${p3.xp2}`); //p3 can access property of p2, p1 and its own
console.log(`using p3: ${p3.xp1}`);
console.log(`using p3: ${p3.xp3}`);

//If a property exists in both the object and its prototype, the object's own property takes priority.
const person = {
  country: "India",
};
const student = Object.create(person);
student.country = "USA";

console.log(student.country); // output: USA
