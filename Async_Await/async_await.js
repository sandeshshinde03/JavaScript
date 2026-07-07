function login(studentId, password) {
  return new Promise((resolve, reject) => {
    console.log("Checking login credentials...");
    setTimeout(() => {
      if (studentId === "sd101" && password === "1234") {
        resolve({
          id: 101,
          name: "Sandesh",
        });
      } else {
        reject("Invalid Student ID or Password");
      }
    }, 2000);
  });
}

function getProfile(sId) {
  return new Promise((resolve, reject) => {
    console.log("\nLoading student profile...");
    setTimeout(() => {
      resolve({
        id: sId,
        department: "Information Technology",
        city: "Pune",
      });
    }, 2000);
  });
}

function getCourses(sId) {
  return new Promise((resolve, reject) => {
    console.log("\nLoading courses...");
    setTimeout(() => {
      resolve(["Java", "JavaScript", "React"]);
    }, 2000);
  });
}

async function studentDetails() {
  //await must be inside an async function
  //await waits for a Promise to complete before moving to the next line.
  const student = await login("sd101", "1234");
  console.log("Login Successful");
  console.log(student);

  const profile = await getProfile(student.id);
  console.log("Student Profile");
  console.log(profile);

  const courses = await getCourses(student.id);
  console.log("Enrolled Courses");
  console.log(courses);
}

studentDetails();
