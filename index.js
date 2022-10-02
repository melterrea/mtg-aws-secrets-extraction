const core = require("@actions/core");
const github = require("@actions/github");
const getSecretsValue = require("./src/awsUtil");

try {
  const secretsRaw = core.getInput("secrets");
  const secretsArray = secretsRaw.split("/\r?\n/");

  console.log("secretsArray is: ", secretsArray);

  getSecretsValue(secretsArray);

  // const time = new Date().toTimeString();
  // core.setOutput("secrets", time);

  // // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2);
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
