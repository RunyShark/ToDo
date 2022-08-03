import { RecuperarPasswordForm } from "../../index";
import { AuthLayout } from "../../ui/layout/Authlayout";

export const RecuperarPassword = () => {
  return (
    <AuthLayout title="Recuperar contraseña">
      <RecuperarPasswordForm />
    </AuthLayout>
  );
};
