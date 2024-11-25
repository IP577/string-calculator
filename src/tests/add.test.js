import { add } from "../stringCalculator.js";

test("add: should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("add: should return the number itself for single number input", () => {
  expect(add("1")).toBe(1);
});
