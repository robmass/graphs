const binarySearch = require("./binary-search");

module.exports = function extractData(start_date, end_date, data) {
  const startDate = Date.parse(start_date);
  const endDate = Date.parse(end_date);
  if (startDate > endDate) {
    throw "Start Date must be less or equal to End Date";
  }
  const compareFn = (data, index) => Date.parse(data[index].x);
  const startIndex = binarySearch(
    startDate,
    data,
    0,
    data.length - 1,
    false,
    compareFn
  );
  const endIndex = binarySearch(
    endDate,
    data,
    0,
    data.length - 1,
    false,
    compareFn
  );
  return data.slice(startIndex, endIndex + 1);
};
