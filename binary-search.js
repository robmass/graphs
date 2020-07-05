module.exports = function binarySearch(
  key,
  data,
  leftIndex,
  rightIndex,
  strictEquality = false,
  compareFn = (data, x) => data[x]
) {
  if (leftIndex > rightIndex) {
    return false;
  }

  if (leftIndex == rightIndex) {
    if (strictEquality) {
      if (key === compareFn(data, leftIndex)) {
        return leftIndex;
      } else {
        return -1;
      }
    } else {
      return leftIndex;
    }
  }
  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (key === compareFn(data, middleIndex)) {
    return middleIndex;
  } else if (key < compareFn(data, middleIndex)) {
    return binarySearch(
      key,
      data,
      leftIndex,
      middleIndex,
      strictEquality,
      compareFn
    );
  } else {
    return binarySearch(
      key,
      data,
      middleIndex + 1,
      rightIndex,
      strictEquality,
      compareFn
    );
  }
};
