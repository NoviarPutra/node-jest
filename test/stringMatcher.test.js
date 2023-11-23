test("test string matcher with jest", () => {
  const value = "Hello";
  expect(value).toBe("Hello");
  expect(value).toEqual("Hello");
  expect(value).toMatch("Hello");
  expect(value).toMatch(/Hello/);
  expect(value).toBeDefined();
  expect(value).not.toMatch("World");
  expect(value).not.toEqual("World");
  expect(value).not.toBe("World");
  expect(value).not.toMatch(/World/);
  expect(value).not.toBeNull();
  expect(value).not.toBeUndefined();
});
