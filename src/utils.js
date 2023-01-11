const processInputToArray = (input) => {
  if (!input || input.length === 0) {
    throw "No input string provided!";
  }

  return input.trim().split(/\s+/);
};

const changeKeys = (prefix, item) => {
  return Object.keys(item).reduce((result, key) => {
    const cleanKey = `${cleanString(key)}`;
    result[cleanKey] = item[key];
    return result;
  }, {});
};

const cleanString = (string) =>
  string.toLowerCase().replace(/\s+/g, "_").replace(/\W+/g, "");

module.exports = {
  changeKeys,
  processInputToArray,
};
