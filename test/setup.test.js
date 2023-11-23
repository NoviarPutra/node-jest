import { sum } from "../src/sum";

beforeAll(async () => {
  console.info("beforeAll");
});

afterAll(async () => {
  console.info("afterAll");
});

beforeEach(async () => {
  console.info("beforeEach");
});

afterEach(async () => {
  console.info("afterEach");
});

test("first test", async () => {
  expect(sum(1, 2)).toBe(3);
  console.info("first test");
});

test("second test", async () => {
  expect(sum(1, 2)).toBe(3);
  console.info("second test");
});
