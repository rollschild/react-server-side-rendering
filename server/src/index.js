/*
const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home").default; // ???
*/
import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
// import React from "react";
// import { renderToString } from "react-dom/server";
// import Home from "./client/components/Home";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);

app.use(express.static("public"));
// treat the public folder as public to browsers

// get("*") means no matter what,
// ...express always passes requests to the
// ...render
app.get("*", (req, res) => {
  const store = createStore(req);
  // here we need to make node.js
  // ...somehow recognize JSX code
  // solution: use webpack
  // need to create webpack config file

  //                                               de-structuring
  //                                                  vvvvvvvvv
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  console.log(promises);

  Promise.all(promises).then(() => {
    // send it back to whoever makes the request
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
