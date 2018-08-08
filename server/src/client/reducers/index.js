import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

export default combineReducers({
  // users property of the state object
  users: usersReducer
});
