const findKeyByValue = function(object, value) {
  for (let property in object) {
    if (object[property] === value) {
      return property;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;