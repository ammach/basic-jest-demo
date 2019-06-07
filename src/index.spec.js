const { sum } = require("./index");

describe("tests of index file", () => {
  it("sould add numbers", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
