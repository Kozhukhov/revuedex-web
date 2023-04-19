const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.base.config");
const developmentConfig = require("./webpack.dev.config");
const productionConfig = require("./webpack.prod.config");

module.exports = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return merge(commonConfig, developmentConfig);
    case "production":
      return merge(commonConfig, productionConfig);
    default:
      throw new Error("No matching configuration was found!");
  }
};
