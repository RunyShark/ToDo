import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage, TodoPage } from "../index";

export const AppRoutes = () => {
  const userState = "autenticate";

  return (
    <Routes>
      {userState === "autenticate" ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<TodoPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
