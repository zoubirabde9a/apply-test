import { validateString, fixString } from "../src/script";


describe("test absolute path", () => {
  it("should return true for https://www.upwork.com/nx/job-post/regular/)", () => {
    expect(validateString("https://www.upwork.com/nx/job-post/regular/")).toBe(true);
  });

  it("should return false for /nx/job-post/regular/", () => {
    expect(validateString("/nx/job-post/regular/")).toBe(false);
  });

  it("should return true for www.google.com", () => {
    expect(validateString("www.google.com")).toBe(true);
  });

});

describe("test remove blank function", () => {
  it("testing 'test test    test'", () => {
    expect(fixString("test test    test")).toBe("test test test");
  });

  it("testing 'test   t     test  g  test'", () => {
    expect(fixString("test   t     test  g  test")).toBe("test t test g test");
  });

});