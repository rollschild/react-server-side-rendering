import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchUsers } from "../actions/index";

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        List of users.
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

// we do not want to render yet,
// ...so we do not use connect or Provider
function loadData(store) {
  // console.log("Loading some data...");
  return store.dispatch(fetchUsers());
  // this line returns a promise representing
  // ...the underlying request
}

// export { loadData };

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersListPage)
};
