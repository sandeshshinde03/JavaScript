// give only active user names
const users = [
  { name: "Sandesh", active: true },
  { name: "Sahil", active: false },
  { name: "Rutik", active: true },
  { name: "Ram", active: false },
];

const activeUsers = users
  .filter((user) => {
    return user.active === true;
  })
  .map((user) => {
    return user.name;
  });

console.log(activeUsers);

//Names Starting With "S" and Convert them to uppercase.
const names = ["Sandesh", "Rutik", "Sahil", "Sneha", "Raj", "Dipali"];
const s = names
  .filter((name) => {
    if (name.at(0) === "S") {
      return name;
    }
  })
  .map((name) => {
    return name.toUpperCase();
  });

console.log(s);

//Expensive Products with GST

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 2000 },
];

const exp = products
  .filter((p) => {
    if (p.price >= 1500) {
      return p;
    }
  })
  .map((p) => {
    return p.price + p.price * 0.18;
  });

// Filter IT employees and map their name with annual salary
const employees = [
  {
    name: "Sandesh",
    salary: 50000,
    department: "IT",
  },
  {
    name: "Rutik",
    salary: 40000,
    department: "HR",
  },
  {
    name: "Sahil",
    salary: 60000,
    department: "IT",
  },
];

const ItEmp = employees
  .filter((emp) => {
    return emp.department === "IT";
  })
  .map((emp) => ({
    name: emp.name,
    annualSalary: emp.salary * 12,
  }));

console.log(ItEmp);
