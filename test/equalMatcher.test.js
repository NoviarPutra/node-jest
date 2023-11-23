test("test equal matcher with jest", () => {
  const obj = {
    a: 1,
  };
  expect(obj).toEqual({ a: 1 });
});
