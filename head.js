const head = function(array) {
  if (!array.length) {
    return undefined;
  }
  return array[0];
};

module.exports = head;