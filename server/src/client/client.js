// Startup point for the client side application
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
// console.log("Client side is working.");

// make sure to render the app in the same div
ReactDOM.hydrate(<Home />, document.querySelector("#root"));
// Tell react to go back through
// ...and set up all event handlers
// ...to bind to the existing structure
// ...NOT replacing
// The process is called "Hydration"
// ...re-rendering of the once-rendered html
