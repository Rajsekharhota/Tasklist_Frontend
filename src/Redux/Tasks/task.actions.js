import {
  CREATE_TASKS_ERROR,
  CREATE_TASKS_LOADING,
  CREATE_TASKS_SUCCESS,
  DELETE_TASKS_ERROR,
  DELETE_TASKS_LOADING,
  DELETE_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASKS_LOADING,
  GET_TASKS_SUCCESS,
  UPDATE_TASKS_ERROR,
  UPDATE_TASKS_LOADING,
  UPDATE_TASKS_SUCCESS,
} from "./task.types";
import axios from "axios";
import { store } from "../Store";
import { LOGOUT } from "../Users/user.types";

export const getTasks = () => async (dispatch) => {
  const { token } = store.getState().userReducer;

  dispatch({ type: GET_TASKS_LOADING });
  try {
    const result = await axios.get("http://localhost:4000/task", {
      headers: {
        Authorization: token,
      },
    });

    const { status, message, data } = result.data;
    console.log(message);
    if (status === 1) {
      dispatch({ type: GET_TASKS_SUCCESS, payload: data });
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: GET_TASKS_ERROR });
    }
  } catch (error) {
    dispatch({ type: GET_TASKS_ERROR });
  }
};

export const createTasks = (obj) => async (dispatch) => {
  const { token } = store.getState().userReducer;

  dispatch({ type: CREATE_TASKS_LOADING });
  try {
    const result = await axios.post("http://localhost:4000/task/create", {
      data: obj,
      headers: {
        Authorization: token,
      },
    });

    const { status, message } = result.data;
    console.log(message);
    if (status === 1) {
      dispatch({ type: CREATE_TASKS_SUCCESS });
      dispatch(getTasks());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: CREATE_TASKS_ERROR });
    }
  } catch (error) {
    dispatch({ type: CREATE_TASKS_ERROR });
  }
};

export const updateTasks = (id, obj) => async (dispatch) => {
  const { token } = store.getState().userReducer;

  dispatch({ type: UPDATE_TASKS_LOADING });
  try {
    const result = await axios.patch("http://localhost:4000/task", {
      data: obj,
      headers: {
        Authorization: token,
        id: id,
      },
    });

    const { status, message } = result.data;
    console.log(message);
    if (status === 1) {
      dispatch({ type: UPDATE_TASKS_SUCCESS });
      dispatch(getTasks());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: UPDATE_TASKS_ERROR });
    }
  } catch (error) {
    dispatch({ type: UPDATE_TASKS_ERROR });
  }
};

export const deleteTasks = (id) => async (dispatch) => {
  const { token } = store.getState().userReducer;

  dispatch({ type: DELETE_TASKS_LOADING });
  try {
    const result = await axios.delete("http://localhost:4000/task/", {
      data: obj,
      headers: {
        Authorization: token,
        id: id,
      },
    });

    const { status, message } = result.data;
    console.log(message);
    if (status === 1) {
      dispatch({ type: DELETE_TASKS_SUCCESS });
      dispatch(getTasks());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: DELETE_TASKS_ERROR });
    }
  } catch (error) {
    dispatch({ type: DELETE_TASKS_ERROR });
  }
};
