const mongoose = require("mongoose");
const { dbConfigs } = require("./constants");

const getConfig = async (configName) => {
  try {
    const configKey = dbConfigs[configName];
    if (!configKey) {
      throw new Error(
        `Invalid configName: "${configName}" not found in dbConfigs`
      );
    }

    const collection = mongoose.connection.db.collection("configs");
    const result = await collection.findOne({ name: configKey });

    if (!result) {
      console.warn(`No config found with name "${configKey}"`);
    }

    return result;
  } catch (error) {
    console.error("Failed to fetch config:\n", error);
    throw error;
  }
};

module.exports = {
    getConfig
}