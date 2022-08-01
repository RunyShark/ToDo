import { Route, Routes, Navigate } from "react-router-dom";
import { TodoPage, PerfilPage } from "../../index";

export const TodoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/Perfil" element={<PerfilPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
