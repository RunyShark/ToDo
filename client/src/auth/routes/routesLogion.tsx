import { Routes, Route, Navigate } from "react-router-dom";
import {
  LoginPage,
  RegisterPage,
  ChanguePasswordPage,
  RecuperarPassword,
} from "../../index";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="recuperarCuenta" element={<RecuperarPassword />} />
      <Route path="recuperarCuenta/:token" element={<ChanguePasswordPage />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
