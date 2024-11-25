import { add } from "../stringCalculator.js";

test("add: should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("add: should return the number itself for single number input", () => {
  expect(add("1")).toBe(1);
});

test("add: should return the sum of two comma-separated numbers", () => {
  expect(add("1,5")).toBe(6);
});

test("add: should return the sum of multiple comma-separated numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("add: should handle newlines as delimiters between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("add: should handle custom delimiters specified at the beginning", () => {
  expect(add("//;\n1;2")).toBe(3);
});
