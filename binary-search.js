module.exports = function binarySearch(
  key,
  data,
  leftIndex,
  rightIndex,
  compareFn
) {
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
