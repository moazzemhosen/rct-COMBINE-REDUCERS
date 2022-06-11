import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { todoReducer } from "./todo/todo.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  feed: todoReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// reducers are not ready
