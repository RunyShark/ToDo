import { LoginForm } from "../../index";
import { AuthLayout } from "../../ui/layout/Authlayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Iniciar sesión">
      <LoginForm />
    </AuthLayout>
  );
};
