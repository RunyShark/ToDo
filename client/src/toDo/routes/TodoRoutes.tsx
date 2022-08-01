import { Route, Routes, Navigate } from "react-router-dom";
import { TodoPage, PerfilPage } from "../../index";

export const TodoRoutes = () => {
  return (
    <Routes>
      <Route path="wenas" element={<TodoPage />} />
      <Route path="Perfil" element={<PerfilPage />} />
      <Route path="/*" element={<Navigate to="/taks" />} />
    </Routes>
  );
};
