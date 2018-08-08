/*
const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home").default; // ???
*/

import express from "express";
// import React from "react";
// import { renderToString } from "react-dom/server";
// import Home from "./client/components/Home";
import renderer from "./helpers/renderer";

const app = express();

app.use(express.static("public"));
// treat the public folder as public to browsers

// get("*") means no matter what,
// ...express always passes requests to the
// ...render
app.get("*", (req, res) => {
  // here we need to make node.js
  // ...somehow recognize JSX code
  // solution: use webpack
  // need to create webpack config file

  // send it back to whoever makes the request
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
