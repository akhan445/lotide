const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 0 for [0]", () => {
    assert.strictEqual(head([0]), 0);
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("returns undefined for 1", () => {
    assert.strictEqual(head(1), undefined);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
});

// const assertEqual = require('../assertEqual');
// const head = require('../head');

// assertEqual(head([5,6,7]), 5);
// assertEqual(head([]), undefined);
// assertEqual(head([0]), 0);
// assertEqual(head(1), undefined);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");