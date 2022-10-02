const AWS = require("@aws-sdk/client-secrets-manager");
// To get region from ENV variables
const client = new AWS.SecretsManager({ region: "eu-central-1" });

const getSecretsValue = async (secretsKey) => {
  try {
    if (!secretsKey || secretsKey.length === 0) {
      throw "No Secrets Keys provided";
    }

    // const secretsKeyResults = {};

    for (let i = 0; i < secretsKey.length; i++) {
      const command = {
        SecretId: secretsKey[i],
      };

      const data = await client.getSecretValue(command);

      console.log("Data is ", data);
    }
  } catch (e) {
    console.log("Error: ", e.message);
  }
};

module.exports = { getSecretsValue };
