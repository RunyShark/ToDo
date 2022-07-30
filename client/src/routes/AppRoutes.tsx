import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthRoutes, TodoPage } from "../index";

export const AppRoutes = () => {
  const userState = "autenticate";

  return (
    <Suspense fallback={<span>Loading......</span>}>
      <Routes>
        {userState === "autenticate" ? (
          <>
            <Route path="/auth/*" element={<AuthRoutes />} />
          </>
        ) : (
          <>
            <Route path="/" element={<TodoPage />} />
          </>
        )}
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </Suspense>
  );
};
