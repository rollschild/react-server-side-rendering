// config file related to browser
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  // Tell webpack the root file of our app
  entry: "./src/client/client.js",

  // Tell webpack wehere to put the output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
};

module.exports = merge(baseConfig, config);
