const eqArrays = function(arr, arr2) {
  // Edge case: Not same # of elements
  if (arr.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      return false;
    }
  }
  // Looped through entire array, comaparing every element
  return true;
};

module.exports = eqArrays;