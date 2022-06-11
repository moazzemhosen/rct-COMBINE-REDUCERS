import { GET_ERROR, GET_LOADING, GET_TODOSUCESS } from "./todo.types";


const initalState = {
  getTodoss: {
    loading: false,
    error: false,
  },
  data: [],
};
export const todoReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_LOADING: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: true,
          error: false,
        },
      };
    }
    case GET_TODOSUCESS: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          error: false,
        },
        data: payload,
      };
    }
    case GET_ERROR: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          error: true,
        },
      };
    }
    default: {
      return state;
    }
  }
};
