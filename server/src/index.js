const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home").default; // ???
const app = express();

app.get("/", (req, res) => {
  // here we need to make node.js
  // ...somehow recognize JSX code
  // solution: use webpack
  // need to create webpack config file
  const content = renderToString(<Home />);

  // send it back to whoever makes the request
  res.send(content);
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
