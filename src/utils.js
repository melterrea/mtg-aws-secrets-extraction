const processInputToArray = (input) => {
  if (!input || input.length === 0) {
    throw "No input string provided!";
  }

  return input.trim().split(/\s+/);
};

const changeKeys = (item) => {
  return Object.keys(item).reduce((result, key) => {
    const cleanKey = key.toLowerCase().replace(/\s+/g, "_").replace(/\W+/g, "");
    result[cleanKey] = item[key];
    return result;
  }, {});
};

module.exports = {
  changeKeys,
  processInputToArray,
};
