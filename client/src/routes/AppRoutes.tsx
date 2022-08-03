import { Suspense, useEffect, useMemo } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthRoutes, TodoRoutes, useAuth, useTaks } from "../index";
import { ChekingAuth } from "../ui/components/ChekingAuth";

export const AppRoutes = () => {
  const { status, checkAuthToken } = useAuth();
  const { startGetTask, todos } = useTaks();
  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <ChekingAuth />;
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
