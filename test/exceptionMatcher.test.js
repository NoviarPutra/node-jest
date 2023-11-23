import { throwException } from "../src/exception";

test("test exception matcher with jest", () => {
  expect(() => throwException()).toThrow();
});
