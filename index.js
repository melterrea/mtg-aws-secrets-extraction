const core = require("@actions/core");
const { getSecretsValue } = require("./src/awsUtil");
const { processInputToArray } = require("./src/utils");

(async () => {
  try {
    const result = await getSecretsValue(
      processInputToArray(core.getInput("secrets"))
    );

    Object.keys(result).forEach((key) => {
      core.setSecret(key, result[key]);
    });
  } catch (error) {
    core.setFailed(error.message);
  }
})();
