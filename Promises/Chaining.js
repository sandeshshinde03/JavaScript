//Promise chaining is a way of executing asynchronous tasks one after another using .then(), where each promise starts only after the previous promise has completed successfully.
function login(userName, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName === "Sandesh" && password === "1234") {
        console.log("Login Successful");
        resolve({ id: 1, userName: "Sandesh" });
      } else {
        reject("Invalid Credentials");
      }
    }, 2000);
  });
}

function getProfile(id) {
  return new Promise((resolve, reject) => {
    console.log("Fetching user profile...");
    setTimeout(() => {
      resolve({
        id: id,
        name: "Sandesh Shinde",
        city: "Pune",
      });
    }, 1000);
  });
}

// Successful Login Example
const user1 = login("Sandesh", "1234");
user1
  .then((user) => {
    console.log(user);
    return getProfile(user.id);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Failed Login Example
login("Sandesh", "09876")
  .then((user2) => {
    console.log(user2);
    return getProfile(user2.id);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
