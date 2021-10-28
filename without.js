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

const without = function(source, itemsToRemove) {
  //Edge Case: Either array is empty
  if (!source.length || !itemsToRemove.length) {
    return [];
  }
  const filtered = [];
  for (let i = 0; i < source.length; i++) {
    let found = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      filtered.push(source[i]);
    }
  }
  return filtered;
};


// TESTING
assertArraysEqual(without([1, 2, 3, 4 ,5, 1], [1, 2, 3]), [4, 5]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([], []), []);
assertArraysEqual(without([1,2,3,4,5,6], [1,1,1]), [2,3,4,5,6]);



