import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    user: {},
    errorMessage: null,
  },
  reducers: {
    onChecking: (state) => {},
    onRegister: (state, { payload }) => {},
    onLogin: (state, { payload }) => {},
    onLogout: (state, { payload }) => {},
    clearErros: (state, { payload }) => {},
  },
});

// Action creators are generated for each case reducer function
export const { onChecking, onRegister, onLogin, onLogout, clearErros } =
  authSlice.actions;
