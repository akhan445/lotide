const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// TESTING
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false