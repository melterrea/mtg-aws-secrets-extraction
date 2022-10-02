const core = require("@actions/core");
const github = require("@actions/github");
const { getSecretsValue } = require("./src/awsUtil");
const { processInputToArray } = require("./src/utils");

(async () => {
  try {
    const result = await getSecretsValue(
      processInputToArray(core.getInput("secrets"))
    );

    console.log("Result is: ", result);

    // const time = new Date().toTimeString();
    // core.setOutput("secrets", time);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
