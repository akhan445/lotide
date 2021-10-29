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

const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);