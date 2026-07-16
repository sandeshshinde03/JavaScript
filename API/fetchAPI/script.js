// fetch() used to make HTTP requests (such as GET, POST, PUT, DELETE) to a server. It returns a Promise that resolves to a Response object.
// The default HTTP method is GET
const promise = fetch("https://jsonplaceholder.typicode.com/users");
promise
  .then((response) => {
    return response.json(); //response.json() also returns a Promise and convert the response into a JavaScript object
  })
  .then((data) => {
    console.log(data);
  });

//using async-await

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

getUsers();
