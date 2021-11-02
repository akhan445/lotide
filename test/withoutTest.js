const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

// TESTING
assertArraysEqual(without([1, 2, 3, 4 ,5, 1], [1, 2, 3]), [4, 5]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([], []), []);
assertArraysEqual(without([1,2,3,4,5,6], [1,1,1]), [2,3,4,5,6]);