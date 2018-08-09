// import axios from "axios";

export const FETCH_USERS = "fetch_users";
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get("/users");

  // action creator
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};
