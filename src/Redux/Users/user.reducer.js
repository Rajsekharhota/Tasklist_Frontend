import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT,
} from "./user.types";

const INITIAL_STATE = {
  token: null,
  auth: false,
  loading: false,
  error: false,
};

function userReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        token: payload,
        auth: true,
      };
    }

    case LOGIN_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case LOGOUT: {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
}

export default userReducer;
