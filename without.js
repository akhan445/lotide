const without = function(source, itemsToRemove) {
  //Edge Case: Either array is empty
  if (!source.length || !itemsToRemove.length) {
    return [];
  }
  const filtered = [];
  for (let i = 0; i < source.length; i++) {
    let found = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      filtered.push(source[i]);
    }
  }
  return filtered;
};

module.exports =without;



