const core = require("@actions/core");
const { getSecretsValue } = require("./src/awsUtil");
const { processInputToArray } = require("./src/utils");

(async () => {
  try {
    const result = await getSecretsValue(
      processInputToArray(core.getInput("secrets"))
    );
    console.log("Result is: ", result);
    core.setOutput("secrets", result);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
