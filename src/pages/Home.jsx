import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addTodo, getTodos } from "../store/todo/todo.actions";

const Home = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { data, getTodoss } = useSelector((state) => state.feed);

  const addNew = () => {
    const value = ref.current.value;
    dispatch(
      addTodo({
        value: value,
        isComplete: false,
      })
    );
  };
  // localStorage, check if data
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getTodos());
    }
  }, [dispatch,data]);

  return (
    <div>
      <h1>Home</h1>
      <br />
      <h1>
        <div>
          <input ref={ref} type="text" />
          <button onClick={addNew}>Add</button>
        </div>
        <br />
        {data.map((todo) => (
          <div key={todo.id}>{todo.value}</div>
        ))}
      </h1>
    </div>
  );
};
export default Home;
