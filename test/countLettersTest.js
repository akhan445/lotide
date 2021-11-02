const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');
// TESTING
const counts = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

const results = countLetters("lighthouse in the house");
assertEqual(counts["l"], results["l"]);
assertEqual(counts["i"], results["i"]);
assertEqual(counts["g"], results["g"]);
assertEqual(counts["h"], results["h"]);
assertEqual(counts["t"], results["t"]);
assertEqual(counts["o"], results["o"]);
assertEqual(counts["u"], results["u"]);
assertEqual(counts["s"], results["s"]);
assertEqual(counts["e"], results["e"]);
assertEqual(counts["n"], results["n"]);