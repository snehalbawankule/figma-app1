import { createAsyncThunk } from "@reduxjs/toolkit";

import { actions } from "./reducer";

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (_, { dispatch }) => {
    return fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.addTodo(json));
      });
  }
);
