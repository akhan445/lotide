const tail = function(array) {
  if (!array.length || array.length === 1) {
    return [];
  }
  return array.slice(1);
};

module.exports = tail;
