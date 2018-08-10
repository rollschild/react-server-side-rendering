import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import adminsReducer from "./adminsReducer";

export default combineReducers({
  // users property of the state object
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer
});
