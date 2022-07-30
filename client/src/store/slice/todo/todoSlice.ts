import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoadingTodos: true,
    todos: [],
  },
  reducers: {
    onAddNewTodo: (state, { payload }) => {},
    onDeleteTodo: (state, { payload }) => {},
    onUpdateTodo: (state, { payload }) => {},
    onLogoutUser: (state) => {
      state.isLoadingTodos = true;
      state.todos = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { onAddNewTodo, onDeleteTodo, onUpdateTodo } = todoSlice.actions;
