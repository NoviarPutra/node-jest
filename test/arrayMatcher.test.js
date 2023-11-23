test("test array matcher with jest", () => {
  const arr = [1, 2, 3];
  expect(arr).toContain(1);
  expect(arr).toContain(2);
  expect(arr).toContain(3);
  expect(arr).toHaveLength(3);
  expect(arr).toEqual([1, 2, 3]);
  expect(arr).not.toContain(4);
  expect(arr).not.toHaveLength(4);
  expect(arr).not.toEqual([1, 2, 3, 4]);
});
