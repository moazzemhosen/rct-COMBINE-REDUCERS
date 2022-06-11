import axios from "axios";
import {
  ADD_TODO,
  GET_ERROR,
  GET_LOADING,
  GET_TODOSUCESS,
} from "./todo.types";

export const getTodos = () => (dispatch) => {
  dispatch({ type: GET_LOADING });
  axios
    .get("http://localhost:8080/todos")
    .then((r) => {
      dispatch({ type: GET_TODOSUCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: GET_ERROR });
    });
};
export const addTodo = (payload) => (dispatch) => {
  // dispatch({ type: ADD_TODO });
  let data = { title: payload, state: false };
  axios
    .post("http://localhost:8080/todos", data)
    .then((res) => {
      dispatch({ type: ADD_TODO, payload: res.data });
    })
    .catch(() => {
      // dispatch({ type: ADD_TODO_ERROR });
    });
};
