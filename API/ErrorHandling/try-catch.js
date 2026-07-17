//1)
// try-catch handles rejected Promises. HTTP errors are not caught unless an Error is thrown.
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log("Error : ", error.message);
  }
}

getUsers();

//2)

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    data.forEach((user) => {
      console.log(user.name);
    });
  } catch (error) {
    console.log(error.message);
  }
}

getData();

//3)
// handled specific HTTP status codes. Throw custom Errors for different HTTP responses.
async function getDataAgain() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (response.status === 400) {
      throw new Error("invalid data");
    }
    if (response.status === 401) {
      throw new Error("Unauthorized Access");
    }
    if (response.status === 404) {
      throw new Error("Page not found");
    }
    if (response.status === 500) {
      throw new Error("Server Error");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

getDataAgain();
