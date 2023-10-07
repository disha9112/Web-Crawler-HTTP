const { sortPages } = require("./report");
const { test, expect } = require("@jest/globals");

test("sortPages 5 pages", () => {
  const input = {
    "https://wagslane.dev/path1": 1,
    "https://wagslane.dev": 3,
    "https://wagslane.dev/path2": 2,
    "https://wagslane.dev/path3": 7,
    "https://wagslane.dev/path4": 5,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://wagslane.dev/path3", 7],
    ["https://wagslane.dev/path4", 5],
    ["https://wagslane.dev", 3],
    ["https://wagslane.dev/path2", 2],
    ["https://wagslane.dev/path1", 1],
  ];
  expect(actual).toEqual(expected);
});
