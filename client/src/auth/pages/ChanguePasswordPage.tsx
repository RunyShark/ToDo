import { ChanguePassword } from "../../index/index";
import { AuthLayout } from "../../ui/layout/Authlayout";

export const ChanguePasswordPage = () => {
  return (
    <AuthLayout title="Cambia tu contraseña">
      <ChanguePassword />
    </AuthLayout>
  );
};
