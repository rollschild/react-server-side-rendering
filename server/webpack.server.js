// config file related to server
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // Informing webpack we're building
  // ...a bundle for node.js, instead of
  // ...for a browser
  target: "node",

  // Tell webpack the root file of our app
  entry: "./src/index.js",

  // Tell webpack wehere to put the output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  // Tell webpack not to bundle any library
  // ...into the bundle.js if it
  // ...exists in the node_modules folder
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
