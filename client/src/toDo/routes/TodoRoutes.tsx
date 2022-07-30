import { Route, Routes, Navigate } from "react-router-dom";
import { TodoPage } from "../../index";

export const TodoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
