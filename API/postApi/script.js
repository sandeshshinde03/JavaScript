//POST is an HTTP method used to send data to the server. It is most commonly used to create new data or submit information for processing.
//https://jsonplaceholder.typicode.com     is a fake REST API used for learning and testing.
//JSON.stringify()    It converts a JavaScript value into a JSON-formatted string.

const options = {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((response) => response.json())
  .then((json) => console.log(json));

//The order of properties (method, headers, and body) in the options object does not affect the fetch request.

//using async-await
async function createUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: "doo",
      body: "bar",
      userId: 2,
    }),
  });
  const result = await response.json();
  console.log(result);
}

createUser();
