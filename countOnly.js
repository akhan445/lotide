// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (item of allItems) {
    if (itemsToCount[item]) {
      results[item] = results[item] === undefined ? 1 : results[item] += 1;
    }
  }
  // console.log(results);
  return results;
};

module.exports = countOnly;