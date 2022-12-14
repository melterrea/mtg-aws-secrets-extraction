const AWS = require("@aws-sdk/client-secrets-manager");
const client = new AWS.SecretsManager({});
const { changeKeys } = require("./utils");

const getSecretsValue = async (secretsKey) => {
  try {
    if (!secretsKey || secretsKey.length === 0) {
      throw "No Secrets Keys provided";
    }

    let secretsKeyResults = {};

    for (let i = 0; i < secretsKey.length; i++) {
      const data = await client.getSecretValue({
        SecretId: secretsKey[i],
      });

      if (!data.SecretString) {
        throw "No SecretString property returned in data object.";
      }

      const secretObject = changeKeys(
        secretsKey[i],
        JSON.parse(data.SecretString)
      );

      secretsKeyResults = {
        ...secretObject,
      };
    }

    return secretsKeyResults;
  } catch (e) {
    console.log("Error fetching secret is: ", e.message);
  }
};

module.exports = { getSecretsValue };
