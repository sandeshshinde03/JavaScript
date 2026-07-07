function login(username, password) {
  return new Promise((resolve, reject) => {
    console.log("Checking credentials...");

    setTimeout(() => {
      if (username === "sandesh" && password === "12345") {
        resolve({
          id: 101,
          name: "Sandesh",
        });
      } else {
        reject("Invalid Username or Password");
      }
    }, 2000);
  });
}

async function loginUser() {
  try {
    //To handle errors from rejected Promises we can use try-catch block in async-await.
    const user = await login("sandesh", "1235");
    console.log("Welcome", user.name);
  } catch (error) {
    console.log(error);
  }
}

loginUser();
