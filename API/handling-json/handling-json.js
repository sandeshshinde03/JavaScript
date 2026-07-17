// JavaScript Object
const student = {
  id: 101,
  name: "Sandesh",
  course: "JavaScript",
};
console.log("Original Object:", student);

// JSON.stringify()  Convert object into string before sending to server
const jsonData = JSON.stringify(student);
console.log("\nJson String:", jsonData);

// JSON.parse()   Convert JSON String into an object
const parsedData = JSON.parse(jsonData);

console.log("\nParsed Object:", parsedData);

// Access Data
console.log("\nStudent ID:", parsedData.id);
console.log("Student Name:", parsedData.name);
console.log("Course:", parsedData.course);
