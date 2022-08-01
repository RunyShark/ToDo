import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onRegister: (state, { payload }) => {
      state.status = "checking";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticate";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
      state.errorMessage = payload || undefined;
    },
    clearErros: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onRegister, onLogin, onLogout, clearErros } =
  authSlice.actions;
