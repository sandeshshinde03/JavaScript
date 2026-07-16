// An event is something that happens on a webpage, usually because of a user action.(click, input, change, submit, key)

const clickBtn = document.querySelector("#clickBtn");
clickBtn.addEventListener("click", () => {
  console.log("button click");
});

const dblBtn = document.querySelector("#dblBtn");
console.log(dblBtn);
dblBtn.addEventListener("click", () => {
  console.log("single");
});

dblBtn.addEventListener("dblclick", () => {
  console.log("double");
});

//Mouse Events
const box = document.querySelector("#box");

box.addEventListener("click", () => {
  console.log("Clicked");
});

box.addEventListener("mouseenter", () => {
  box.style.background = "green";
});

box.addEventListener("mouseleave", () => {
  box.style.background = "lightblue";
});

box.addEventListener("mousemove", () => {
  console.log("Moving");
});

//Keyboard Events
const input = document.querySelector("#textInput");
const op = document.querySelector("#output");

input.addEventListener("keydown", (e) => {
  console.log(e.key);
  op.textContent = "Key down";
});

input.addEventListener("keyup", (e) => {
  console.log("Released:", e.key);
  op.textContent = "key up";
});

//Form Events
const form = document.querySelector("#myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Submitted");
});

//Input Events
const input2 = document.getElementById("textInput");

input2.addEventListener("input2", function () {
  console.log(input.value);
});

//Focus Events
const input3 = document.getElementById("focusInput");

input3.addEventListener("focus", function () {
  input3.style.background = "yellow";
});

input3.addEventListener("blur", function () {
  input3.style.background = "white";
});
