test("test not matcher with jest", () => {
  const value = 1;
  expect(value).not.toBe(2);
  expect(value).not.toBeNull();
  expect(value).not.toBeUndefined();
  expect(value).not.toEqual(2);
});
