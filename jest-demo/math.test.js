const { add, sub, mult, div } = require("./math.js");

test("Addition of two numbers", () => {
  expect(add(10, 12)).toBe(22);
});

test("Substraction of two numbers", () => {
  expect(sub(12, 10)).toBe(2);
});

test("Multiplication of two numbers", () => {
  expect(mult(10, 2)).toBe(20);
});

test("Division of two numbers", () => {
  expect(div(10, 2)).toBe(5);
});

test("Division by zero should throw an error", () => {
  expect(() => div(10, 0)).toThrow("divide by zero error");
});
