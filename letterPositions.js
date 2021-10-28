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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const curr = sentence.charAt(i);
    if (curr !== " ") {
      if (results[curr]) {
        results[curr].push(i);
      } else {
        results[curr] = [i];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").h , [0]);
assertArraysEqual(letterPositions("hello").e , [1]);
assertArraysEqual(letterPositions("hello").l , [2, 3]);
assertArraysEqual(letterPositions("hello").o , [4]);