/*
const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home").default; // ???
*/

import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();

app.use(express.static("public"));
// treat the public folder as public to browsers

app.get("/", (req, res) => {
  // here we need to make node.js
  // ...somehow recognize JSX code
  // solution: use webpack
  // need to create webpack config file
  const content = renderToString(<Home />);

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  // send it back to whoever makes the request
  res.send(html);
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
