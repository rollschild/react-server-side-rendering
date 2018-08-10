import React from "react";
// import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";
import App from "./App";

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
    ...App, // no path tied to it
    // ...meaning it's always on display

    // the following is nested inside App
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...UsersListPage,
        // loadData,
        path: "/users",
        // component: UsersListPage,
        exact: true
      },
      {
        ...AdminsListPage,
        path: "/admins",
        exact: true
      },
      {
        path: "/test",
        component: () => "Test",
        exact: true
      },
      {
        ...NotFoundPage
        // we will NOT provide a path
      }
    ]
  }
];
