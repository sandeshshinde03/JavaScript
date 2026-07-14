document.querySelector(".btn").addEventListener("click", () => {
  import("./greet.js")
    .then((greet) => {
      greet.greet("Sandesh");
    })
    .catch((err) => {
      console.log(err);
    });
});
