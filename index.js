// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,  
  eqObject: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue
};