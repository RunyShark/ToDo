import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isSaving: false,
    messageSaved: "",
    isLoadingTodos: true,
    todos: [],
  },
  reducers: {
    onGetTodos: (state, { payload }) => {},
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
export const { onAddNewTodo, onDeleteTodo, onUpdateTodo, onGetTodos } =
  todoSlice.actions;
