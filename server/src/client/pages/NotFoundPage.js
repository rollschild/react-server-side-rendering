import React from "react";

// context gets passed into the component
// ...as staticContext
// ...renamed by StaticRouter
// but on browser side staticContext does
// ...NOT exist
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Whatever you are lookingfor, is NOT here!</h1>;
};

export default {
  component: NotFoundPage
};
