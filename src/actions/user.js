import ActionTypes from "./ActionTypes";
import axios from "axios";
import { API_ROOT } from "../constants/AppConstants";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const createUser = (userData, history) => dispatch => {
  axios
    .post(`${API_ROOT}/user/register`, userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: ActionTypes.REGISTER_X,
        payload: err.response.data
      })
    );
};

export const loginUser = (userData, history) => async dispatch => {
  axios
    .post(`${API_ROOT}/user/login`, userData)
    .then(res => {
      const { token } = res.data;

      dispatch({ type: ActionTypes.LOGIN_OK, payload: token });
      //set token to localStorage
      localStorage.setItem("jwtToken", token);
      //Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .then(history.push("/categories"))

    .catch(err =>
      dispatch({
        type: ActionTypes.LOGIN_X,
        payload: err.response.rawData
      })
    );
};

//Deactivate User Account
export const deleteUser = id => dispatch => {
  if (window.confirm("Are you sure? This can not be undone!")) {
    axios
      .delete(`${API_ROOT}/user/${id}`)
      .then(res =>
        dispatch({
          type: ActionTypes.SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: ActionTypes.GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: ActionTypes.SET_CURRENT_USER,
    payload: decoded
  };
};

// Logout User
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  window.location.href = "/login";
};
