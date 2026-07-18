const {
  numbers,
  fruits,
  user,
  isEven,
  getUser,
  getMarks,
  getNickname,
} = require("./practice");

test("getUser() should return the correct user", () => {
  expect(getUser()).toEqual({
    name: "Sandesh",
    age: 22,
  });
});

test("nickname is null", () => {
  expect(getNickname()).toBeNull();
});

test("user object should match", () => {
  expect(user).toEqual({
    id: 1,
    name: "Rutik",
    age: 25,
    city: "Mumbai",
  });
});

test("user should have a city property", () => {
  expect(user).toHaveProperty("city");
});

test("user name is not Rutik", () => {
  expect(user.name).not.toBe("Sandesh");
});

test("numbers array should equal the expected array", () => {
  expect(numbers).toEqual([10, 20, 30, 40]);
});

test("numbers array has length 4", () => {
  expect(numbers).toHaveLength(4);
});

test("returns true for an even number", () => {
  expect(isEven(10)).toBeTruthy();
});

test("returns false for an odd number", () => {
  expect(isEven(1)).toBeFalsy();
});

test("fruits array should contain mango", () => {
  expect(fruits).toContain("mango");
});
