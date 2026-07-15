//getElementById()
const title = document.getElementById("mainTitle");
title.style.color = "red";

//getElementsByClassName()
const students = document.getElementsByClassName("student");
const stuArr = Array.from(students);
stuArr.forEach((student) => {
  student.style.color = "red";
});

//getElementsByTagName()
const myli = document.getElementsByTagName("li");
const myliArr = Array.from(myli);
myliArr.forEach((l) => {
  l.style.color = "Blue";
});

//querySelector() :- Returns the first matching element.

//by tag name
const para = document.querySelector("p");
console.log(para.textContent); //Gets or sets only the text.
para.textContent = "Sandesh Shinde"; //set Sandesh to Sandesh Shinde
console.log(para.textContent);

//by id #
const title1 = document.querySelector("#mainTitle");
console.log(title1.innerHTML); //.innerHTML Reads the HTML inside an element.

//by class .
const fruit = document.querySelector(".fruit");
console.log(fruit.innerHTML);

//querySelectorAll() :- returns all matching elements.

//by tag name
const paraAll = document.querySelectorAll("p");
console.log(paraAll);

//by id #
const title2 = document.querySelectorAll("#mainTitle");
console.log(title2);

//by class .
const fruitAll = document.querySelectorAll(".fruit");
console.log(fruitAll);


document.querySelector("#btn1").addEventListener("click", () => {
  console.log("First button click");
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Button click");
  });
});
