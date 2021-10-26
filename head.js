// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);

  }
};

const head = function(array) {
  if (!array.length) {
    return undefined;
  }

  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head([]), undefined);
assertEqual(head([0]), 0);
assertEqual(head(1), undefined);

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");