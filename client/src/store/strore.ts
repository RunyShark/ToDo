import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth/authSlice";
import { todoSlice } from "./slice/todo/todoSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    todo: todoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
