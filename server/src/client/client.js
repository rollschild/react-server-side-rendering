// Startup point for the client side application
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { renderRoutes } from "react-router-config";

// asynchronous actions creators
import thunk from "redux-thunk";

// ties our store in the react side together
import { Provider } from "react-redux";

import Routes from "./Routes";
// import Home from "./components/Home";
// console.log("Client side is working.");

import reducers from "./reducers/index";

const store = createStore(reducers, {}, applyMiddleware(thunk));

// make sure to render the app in the same div
/*
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
*/

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);

// Tell react to go back through
// ...and set up all event handlers
// ...to bind to the existing structure
// ...NOT replacing
// The process is called "Hydration"
// ...re-rendering of the once-rendered html
