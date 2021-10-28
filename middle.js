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

const assertArraysEqual = function(actualArray, expectedArray) {
  const equalArrays = eqArrays(actualArray, expectedArray);

  if (equalArrays) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(actualArray)} === ${JSON.stringify(expectedArray)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${JSON.stringify(actualArray)} !== ${JSON.stringify(expectedArray)}`);

  }
};

const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  }
  
  const isOdd = arr.length % 2 !== 0;

  const halfway = parseInt(arr.length / 2);
  if (isOdd) {
    return arr.slice(halfway, halfway + 1);
  } else {
    return arr.slice(halfway - 1, halfway + 1);
  }
};

// TESTING
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
// ODD CASES
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// EVEN CASES
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]