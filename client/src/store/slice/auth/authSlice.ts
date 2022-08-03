import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    error: undefined,
    status: "not-authenticated",
    user: {},
    msg: "",
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.error = undefined;
    },
    onRegister: (state, { payload }) => {
      const { uid, name } = payload.user;
      state.status = "authenticate";
      state.user = { uid, name };
      state.error = payload.Error;
      state.msg = payload.msg;
    },
    onLogin: (state, { payload }) => {
      const { uid, name } = payload.user;
      state.status = "authenticate";
      state.user = { uid, name };
      state.error = payload.Error;
      state.msg = payload.msg;
    },
    onLogout: (state) => {
      state.status = "not-authenticated";
      state.user = {};
      state.error = undefined;
    },
    onNewPassword: (state) => {
      state.status = "not-authenticated";
      state.msg = "ChanguePassword";
    },
    clearErros: (state) => {
      state.error = undefined;
    },
  },
});

export const {
  onChecking,
  onRegister,
  onLogin,
  onLogout,
  clearErros,
  onNewPassword,
} = authSlice.actions;
