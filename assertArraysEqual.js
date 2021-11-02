const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actualArray, expectedArray) {
  const equalArrays = eqArrays(actualArray, expectedArray);

  if (equalArrays) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(actualArray)} === ${JSON.stringify(expectedArray)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${JSON.stringify(actualArray)} !== ${JSON.stringify(expectedArray)}`);
  }
};

module.exports = assertArraysEqual;