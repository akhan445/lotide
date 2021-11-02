const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

// TESTING
assertArraysEqual(letterPositions("hello").h , [0]);
assertArraysEqual(letterPositions("hello").e , [1]);
assertArraysEqual(letterPositions("hello").l , [2, 3]);
assertArraysEqual(letterPositions("hello").o , [4]);