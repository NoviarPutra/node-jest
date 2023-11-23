test("test truthiness matcher with jest", () => {
  let nullValue = null;

  expect(nullValue).toBeNull();
  expect(nullValue).toBeDefined();
  expect(nullValue).toBeFalsy();

  nullValue = undefined;

  expect(nullValue).toBeUndefined();
  expect(nullValue).toBeFalsy();
});
