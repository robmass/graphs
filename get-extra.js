const binarySearch = require("./binary-search");

module.exports = function getExtra(key, data) {
  const parsedKey = Date.parse(key);
  const compareFn = (data, index) => Date.parse(data[index].x);
  const index = binarySearch(
    parsedKey,
    data,
    0,
    data.length - 1,
    true,
    compareFn
  );
  if (index === -1) {
    throw "Element not found";
  }
  return data[index].y;
};
