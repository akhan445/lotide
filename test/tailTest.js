const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("returns [1, 4, 4, 4] for [4, 4, 4, 4]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// // Test Case: array with one element
// const oneArray = tail([1]);
// assertEqual(oneArray.length, 0);
// assertEqual(oneArray[0], undefined);

// const noElements = tail([]);
// assertEqual(noElements.length, 0);
// assertEqual(noElements[0], undefined);