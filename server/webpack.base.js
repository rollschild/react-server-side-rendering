module.exports = {
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
