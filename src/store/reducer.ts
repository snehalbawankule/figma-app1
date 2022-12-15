import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todo: [
    {
      id: "",
      title: "",
      completed: false,
    },
  ],
};
const { actions, reducer } = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todo = action.payload;
    },
    getTodo(state, action) {
      const { id, title, completed } = action.payload;
      const prevTodo = state.todo.find((item) => item.id === id);
      if (prevTodo) {
        prevTodo.title = title;
        prevTodo.id = id;
        prevTodo.completed = completed;
      }
    },
  },
});
export { actions };
export default reducer;
