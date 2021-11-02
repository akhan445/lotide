const letterPositions = function(sentence) {
  if (sentence === "") {
    return undefined;
  }
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const curr = sentence.charAt(i);
    if (curr !== " ") {
      if (results[curr]) {
        results[curr].push(i);
      } else {
        results[curr] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;