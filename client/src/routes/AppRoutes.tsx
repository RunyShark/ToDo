import { Suspense, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthRoutes, TodoRoutes, useAuth } from "../index";

export const AppRoutes = () => {
  const { status, checkAuthToken } = useAuth();
  useEffect(() => {
    checkAuthToken();
  }, []);
  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }
  return (
    <Suspense fallback={<span>Loading......</span>}>
      <Routes>
        {status === "not-authenticated" ? (
          <>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={<Navigate to="/auth/login" />} />
          </>
        ) : (
          <>
            <Route path="/taks/*" element={<TodoRoutes />} />
            <Route path="/*" element={<Navigate to="/taks/home" />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
};
