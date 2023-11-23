beforeAll(() => console.info("beforeAll Outer"));
afterAll(() => console.info("afterAll Outer"));
beforeEach(() => console.info("beforeEach Outer"));
afterEach(() => console.info("afterEach Outer"));

test("Test Outer", () => console.info("test Outer"));

describe("Inner Scope", () => {
  beforeEach(() => console.info("beforeEach Inner"));
  afterEach(() => console.info("afterEach Inner"));

  test("Test Inner", () => console.info("test Inner"));
});
