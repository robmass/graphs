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
    compareFn
  );
  const endIndex = binarySearch(endDate, data, 0, data.length - 1, compareFn);
  return data.slice(startIndex, endIndex + 1);
};

const binarySearch = (key, data, leftIndex, rightIndex, compareFn) => {
  if (leftIndex > rightIndex) {
    return false;
  }

  if (leftIndex == rightIndex) {
    return leftIndex;
  }
  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (key === compareFn(data, middleIndex)) {
    return middleIndex;
  } else if (key < compareFn(data, middleIndex)) {
    return binarySearch(key, data, leftIndex, middleIndex, compareFn);
  } else {
    return binarySearch(key, data, middleIndex + 1, rightIndex, compareFn);
  }
};
