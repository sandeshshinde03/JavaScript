function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username == "Sandesh" && password === "1234") {
        console.log("Login Successful");
        resolve({ id: 1, username: "Sandesh" });
      } else {
        reject("Invalid Credentials");
      }
    }, 1500);
  });
}

// Successful Login Example
const data = login("Sandesh", "1234");
data
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });

// Failed Login Example
const data2 = login("Sandesh", 7654);
data2
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });
