const core = require("@actions/core");
const { getSecretsValue } = require("./src/awsUtil");
const { processInputToArray } = require("./src/utils");

(async () => {
  try {
    const result = await getSecretsValue(
      processInputToArray(core.getInput("secrets"))
    );

    const arrayResult = [];

    Object.keys(result).forEach((key) => {
      arrayResult.push({ key: result[key] });
    });

    core.setOutput("secret", arrayResult);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
