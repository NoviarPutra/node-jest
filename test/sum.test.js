import { sum } from "../src/sum";

test("function sum should 1 + 2 = 3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
