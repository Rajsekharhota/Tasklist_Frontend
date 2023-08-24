import axios from "axios";
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT,
} from "./user.types";

export const getUser = (obj) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_LOADING });
  try {
    let data = await axios("http://localhost:4000/user/login", {
      method: "post",
      data: obj,
    });

    let { message, token, status } = data.data;
    console.log(message);
    if (status === 1) {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
    } else {
      dispatch({ type: LOGIN_USER_ERROR });
    }
  } catch (error) {
    dispatch({ type: LOGIN_USER_ERROR });
  }
};

export const logoutUser = (navigate) => (dispatch) => {
  dispatch({ type: LOGOUT });
  navigate("/login");
};
