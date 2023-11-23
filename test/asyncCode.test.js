import { asyncCode } from "../src/asyncCode";

test("test async function with jest", async () => {
  const value = await asyncCode("hello");
  expect(value).toBe("hello");
});

test("test async matcher with jest", async () => {
  await expect(asyncCode("hello")).resolves.toBe("hello");
  await expect(asyncCode("error")).rejects.toBe("error");
});
