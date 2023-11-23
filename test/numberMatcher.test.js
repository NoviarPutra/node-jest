test("test number matcher with jest", () => {
  const value = 1;
  expect(value).toBe(1);
  expect(value).toEqual(1);
  expect(value).toBeGreaterThan(0);
  expect(value).toBeLessThan(2);
  expect(value).toBeCloseTo(1);
  expect(value).toBeDefined();
  expect(value).not.toBe(2);
  expect(value).not.toBeNull();
  expect(value).not.toBeUndefined();
  expect(value).not.toEqual(2);
});
