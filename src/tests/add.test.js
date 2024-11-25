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
