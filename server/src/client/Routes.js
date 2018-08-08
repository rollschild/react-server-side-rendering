import React from "react";
// import { Route } from "react-router-dom";
import Home from "./components/Home";
import UsersList from "./components/UsersList";
import { loadData } from "./components/UsersList";

/* with react-router-config, we can NO LONGER
 * use the following Route setup
export default () => {
  
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={() => "Test"} />
      <Route exact path="/users" component={UsersList} />
    </div>
  );
  
};
*/

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    loadData,
    path: "/users",
    component: UsersList,
    exact: true
  },
  {
    path: "/test",
    component: () => "Test",
    exact: true
  }
];
