const processInputToArray = (input) => {
  if (!input || input.length === 0) {
    throw "No input string provided!";
  }

  return input.trim().split(/\s+/);
};

module.exports = {
  processInputToArray,
};
