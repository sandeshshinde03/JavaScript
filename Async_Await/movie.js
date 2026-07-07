function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@gmail.com" && password === "12345") {
        resolve({
          id: 101,
          name: "Sandesh",
        });
      } else {
        reject("Invalid Email or Password");
      }
    }, 2000);
  });
}

function verifySubscription(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSubscribed = true;
      if (isSubscribed) {
        resolve("Subscription Verified");
      } else {
        reject("Subscription Expired");
      }
    }, 2000);
  });
}

function loadMovie() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Avengers: Endgame Loaded");
    }, 3000);
  });
}

function playMovie(movie) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Now Playing: ${movie}`);
    }, 1000);
  });
}

async function watchMovie() {
  try {
    console.log("Logging in...");

    const user = await login("user@gmail.com", "12345");
    console.log("Welcome", user.name);

    const subscription = await verifySubscription(user.id);
    console.log(subscription);

    const movie = await loadMovie();
    console.log(movie);

    const playing = await playMovie(movie);
    console.log(playing);
  } catch (error) {
    console.log("Error:", error);
  }
}

watchMovie();
