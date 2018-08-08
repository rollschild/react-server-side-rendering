import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";
// import Home from "../client/components/Home";

export default req => {
  // StaticRouter needs the path/url to decide
  // ...which set of components to show
  // ...on the screen
  // ...for example, '/'
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
