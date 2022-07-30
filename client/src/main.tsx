import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { TodoApp, store } from "./index";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
