const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

// TESTING
const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
//lengths of words
assertArraysEqual(map(words, word => word.length), [6,7,2,5,3]);

const nums = [1,2,3,4,5];
//Double values
assertArraysEqual(map(nums, num => num * 2), [2,4,6,8,10]);

//Add 5
assertArraysEqual(map(nums, num => num + 5), [6,7,8,9,10]);