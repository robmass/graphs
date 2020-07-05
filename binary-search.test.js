const binarySearch = require("./binary-search");

describe("Search value", function () {
  it("Returns the index of an element in array", function () {
    const data = [1, 4, 6, 8, 9];
    const index = binarySearch(4, data, 0, data.length - 1);
    expect(index).toEqual(1);
  });

  it("Returns -1 when strict equality is set and the key is not in the array", function () {
    const data = [1, 4, 6, 8, 9];
    const index = binarySearch(5, data, 0, data.length - 1, true);
    expect(index).toEqual(-1);
  });

  it("Returns the index of an element closer", function () {
    const data = [1, 4, 6, 8, 9];
    const index = binarySearch(10, data, 0, data.length - 1);
    expect(index).toEqual(4);
  });

  it("Returns the index of an element closer", function () {
    const data = [1, 4, 6, 8, 9];
    const index = binarySearch(5, data, 0, data.length - 1);
    expect(index).toEqual(2);
  });
});
