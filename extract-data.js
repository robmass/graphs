module.exports = function extractData(start_date, end_date, data) {
  const startDate = Date.parse(start_date);
  const endDate = Date.parse(end_date);
  const startIndex = binarySearch(startDate, data, 0, data.length - 1);
  const endIndex = binarySearch(endDate, data, 0, data.length - 1);
  return data.slice(startIndex, endIndex + 1);
};

const binarySearch = (key, data, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return false;
  }
  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (key === Date.parse(data[middleIndex].x)) {
    return middleIndex;
  } else if (key < Date.parse(data[middleIndex].x)) {
    return binarySearch(key, data, leftIndex, middleIndex);
  } else {
    return binarySearch(key, data, middleIndex, rightIndex);
  }
};
