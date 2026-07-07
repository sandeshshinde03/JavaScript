function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Sandesh", city: "Pune" });
    }, 3000);
  });
}

const data = getUserData();
data
  .then((userData) => {
    console.log(userData);
  })
  .catch((err) => {
    console.log(err);
  });
