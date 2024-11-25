import { add } from "../stringCalculator.js";

test("add: should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});
