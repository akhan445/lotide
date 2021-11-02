const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

const grades = {
  "Bryan": 100,
  "Chelsea": 90,
  "Chester": 68,
  "Ahmed": 48,
  "Julie": 73
};

assertEqual(findKey(grades, x => x === 77), undefined);
assertEqual(findKey(grades, x => x === 73), "Julie");
assertEqual(findKey(grades, x => x < 50), "Ahmed");