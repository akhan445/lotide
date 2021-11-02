const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  }
  
  const isOdd = arr.length % 2 !== 0;

  const halfway = parseInt(arr.length / 2);
  if (isOdd) {
    return arr.slice(halfway, halfway + 1);
  } else {
    return arr.slice(halfway - 1, halfway + 1);
  }
};

module.exports = middle;