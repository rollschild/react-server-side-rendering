// config file related to browser
const path = require("path");

module.exports = {
  // Tell webpack the root file of our app
  entry: "./src/client/client.js",

  // Tell webpack wehere to put the output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },

  // Tell webpack to run babel on every time
  // ...it runs through
  // ...to translate JSX to js for node.js
  module: {
    rules: [
      {
        test: /\.js?$/, // only js files
        loader: "babel-loader",
        // executes babel and transpiles our code
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
