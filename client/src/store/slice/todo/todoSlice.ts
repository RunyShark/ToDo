import { createSlice } from "@reduxjs/toolkit";
import { compareDate } from "../../../helpers/compareDate";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    error: null,
    isSaving: false,
    messageSaved: "",
    isLoadingTodos: false,
    todos: [],
    todoCopia: [],
    taksExpired: [],
    update: null,
    view: "no-view",
  },
  reducers: {
    onAddNewTodo: (state, { payload }) => {
      console.log(payload);
      state.isSaving = true;
      state.isLoadingTodos = true;
      state.view = "all";
    },
    onDeleteTodo: (state, { payload }) => {},

    onUpdateTodo: (state, { payload }) => {
      state.update = payload;
      state.view = "actualizar";
    },

    onGetTodos: (state, { payload }) => {
      state.isSaving = true;
      state.isLoadingTodos = true;
      state.messageSaved = payload.msg;
      state.todos = payload.results;
      state.todoCopia = payload.results;
      state.taksExpired = payload.results;
      state.view = "all";
    },

    onImportanTodo: (state) => {
      state.isSaving = true;
      state.isLoadingTodos = true;
      state.view = "importan";
      state.todoCopia = state.todos;
      state.todoCopia = state.todoCopia.filter(
        (taks: any) =>
          taks.important === true &&
          taks.active === true &&
          taks.deleted === false
      );
      state.messageSaved = "Importan";
    },

    onPedingTodo: (state) => {
      state.isSaving = true;
      state.isLoadingTodos = true;
      state.view = "pending";
      state.todoCopia = state.todos;
      state.todoCopia = state.todoCopia.filter(
        (taks: any) => taks.active === true && taks.deleted === false
      );
      state.messageSaved = "pending";
    },

    onFinishTodo: (state) => {
      state.isSaving = true;
      state.isLoadingTodos = true;
      state.view = "fishs";
      state.todoCopia = state.todos;
      state.todoCopia = state.todoCopia.filter(
        (taks: any) => taks.active === false
      );
      state.messageSaved = "fishs";
    },

    onExpiredTodo: (state) => {
      state.isSaving = true;
      state.isLoadingTodos = true;
      state.view = "caduco";
      state.taksExpired = compareDate(state.todoCopia);
      state.messageSaved = "caduco";
    },

    onDeleteSaveTodos: (state) => {
      state.isSaving = true;
      state.isLoadingTodos = true;
      state.view = "delete";
      state.todoCopia = state.todos;
      state.todoCopia = state.todoCopia.filter(
        (taks: any) => taks.deleted === true
      );

      state.messageSaved = "caduco";
    },

    onFinishSaving: (state) => {
      state.isSaving = false;
      state.isLoadingTodos = false;
    },

    onLogoutUser: (state) => {
      state.error = null;
      state.isSaving = false;
      state.messageSaved = "";
      state.isLoadingTodos = false;
      state.todos = [];
      state.todoCopia = [];
      state.taksExpired = [];
      state.update = null;
      state.view = "no-view";
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
