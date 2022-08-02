import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    error: null,
    isSaving: false,
    messageSaved: "",
    isLoadingTodos: false,
    todos: [],
    todoCopia: [],
    view: "no-view",
  },
  reducers: {
    onAddNewTodo: (state, { payload }) => {},
    onDeleteTodo: (state, { payload }) => {},
    onUpdateTodo: (state, { payload }) => {},

    onGetTodos: (state, { payload }) => {
      state.isSaving = true;
      state.isLoadingTodos = true;
      state.messageSaved = payload.msg;
      state.todos = payload.results;
      state.todoCopia = payload.results;
      state.view = "all";
    },

    onImportanTodo: (state) => {
      state.view = "importan";
    },

    onPedingTodo: (state) => {
      state.view = "pending";
    },

    onFinishTodo: (state) => {
      state.view = "fishs";
    },

    onExpiredTodo: (state) => {
      state.view = "caduco";
    },

    onDeleteSaveTodos: (state) => {
      state.view = "deletetaks";
    },

    onFinishSaving: (state) => {
      state.isSaving = false;
      state.isLoadingTodos = false;
    },
    onLogoutUser: (state) => {
      state.isLoadingTodos = true;
      state.todos = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onAddNewTodo,
  onDeleteTodo,
  onUpdateTodo,
  onGetTodos,
  onFinishSaving,
  onImportanTodo,
  onPedingTodo,
  onFinishTodo,
  onExpiredTodo,
  onDeleteSaveTodos,
  onLogoutUser,
} = todoSlice.actions;
