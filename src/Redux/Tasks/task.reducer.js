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

let INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
};

const taskReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TASKS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_TASKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case GET_TASKS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case CREATE_TASKS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case CREATE_TASKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }

    case CREATE_TASKS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case UPDATE_TASKS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case UPDATE_TASKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }

    case UPDATE_TASKS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case DELETE_TASKS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_TASKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }

    case DELETE_TASKS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
export default taskReducer;
