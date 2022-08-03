import { RegisterFrom } from "../../index";
import { AuthLayout } from "../../ui/layout/Authlayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <RegisterFrom />
    </AuthLayout>
  );
};
