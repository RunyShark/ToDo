import { Route, Routes, Navigate } from "react-router-dom";
import { TodoPage, PerfilPage, AddNewTodoPage } from "../../index";

export const TodoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/Perfil" element={<PerfilPage />} />
      <Route path="/Crear" element={<AddNewTodoPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
