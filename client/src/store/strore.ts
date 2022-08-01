import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth/authSlice";
import { todoSlice } from "./slice/todo/todoSlice";
import { modalSlice } from "./slice/modal/modalSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    todo: todoSlice.reducer,
    modal: modalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
