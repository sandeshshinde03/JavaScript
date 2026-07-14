// module.exports :- It makes variables, functions, objects, or classes available to other files.(Exports code from a file)

function sayWelcome(name) {
  console.log(`Welcome ${name}`);
}

module.exports = sayWelcome;
