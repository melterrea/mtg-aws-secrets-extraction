const core = require("@actions/core");
const { getSecretsValue } = require("./src/awsUtil");
const { processInputToArray } = require("./src/utils");

(async () => {
  try {
    const result = await getSecretsValue(
      processInputToArray(core.getInput("secrets"))
    );

    core.setOutput("secrets.abc", result);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
