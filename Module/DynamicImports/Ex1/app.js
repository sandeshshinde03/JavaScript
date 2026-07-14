//Dynamic Import loads a JavaScript module only when it is needed, instead of loading it at the start of the application.
//That means they are only loaded when they are needed.It is achieved using the import() function, Which returns a promise that resolved to the module object.

//It load module1.js only when click on button
document.querySelector(".btn").addEventListener("click", () => {
  const module1 = import("./module1.js");
  module1
    .then((fun) => {
      console.log(fun.sum(12, 10));
    })
    .catch((err) => {
      console.log(err);
    });
});
