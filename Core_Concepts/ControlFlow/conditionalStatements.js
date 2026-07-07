//Control flow 
//Conditional statements

//if statement
let num = 10;
if (num > 0) {
  console.log("Positive number");
}

//Nested if
let username = "admin";
let password = "admin123";
if (username == "admin") {
  if (password == "admin123") {
    console.log("Login successful");
  }
}

//if else statement
let age = 21;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("you are a minor");
}

//Ternary Operator
age =17;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

// else if statements
let marks = 92;
if (marks < 0 || marks > 100) {
  console.log("Invalid Marks");
} else if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 75) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else if (marks >= 45) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//swtich case
let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Wait");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid color");
}

