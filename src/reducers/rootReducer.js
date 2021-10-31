import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { todosReducer } from "./todosReducer";
import { uiReducer } from "./uiReducer";



export const rootReducer = combineReducers({
  auth: authReducer,
  myTodos: todosReducer,
  ui: uiReducer
});
