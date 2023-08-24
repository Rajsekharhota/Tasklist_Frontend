import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./Users/user.reducer";
import taskReducer from "./Tasks/task.reducer";

let rootReducer = combineReducers({
  userReducer: userReducer,
  taskReducer: taskReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
