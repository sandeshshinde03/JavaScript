//Lexical scope
//Inner function can access variables from its own scope and its outer scopes, but outer functions cannot access variables inside inner functions.
function outer() {
  let a = 10;

  function inner() {
    let b = 20;
    console.log(a); // can access outer variable
    console.log(b); // can access inner variable
  }
  console.log(a); // can access outer variable
  //console.log(b); // cannot access inner variable
  inner();
}

outer();
