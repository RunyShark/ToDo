import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import todoAPI from "../api/todoAPI";
import {
  onChecking,
  onRegister,
  onLogin,
  onLogout,
  clearErros,
  onNewPassword,
} from "../index";
import { AuthProps, LoginOrRegister } from "./interfaces/interfacesAuth";

export const useAuth = () => {
  const { status, user, errorMessage } = useSelector<unknown, any>(
    (state: any) => state.auth
  );
  const dispatch = useDispatch();

  const startRegister = async ({ name, email, password }: LoginOrRegister) => {
    dispatch(onChecking());
    try {
      const { data }: { data: AuthProps } = await todoAPI.post<AuthProps>(
        "/auth/register",
        { name, email, password }
      );
      localStorage.setItem("token", data.user?.token!);
      dispatch(onRegister(data));
    } catch (error: any) {
      dispatch(onLogout());
      console.log(error);
      Swal.fire("Verifique", error.response.data.errors[0].msg, "error");
    }
  };

  const startLogin = async ({ email, password }: LoginOrRegister) => {
    dispatch(onChecking());
    try {
      const { data }: { data: AuthProps } = await todoAPI.post<AuthProps>(
        "/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", data.user.token);
      dispatch(onLogin(data));
    } catch (error: any) {
      dispatch(onLogout());
      if (error.response.data.msg) {
        Swal.fire("Verifique", error.response.data.msg, "error");
        return;
      }
      Swal.fire("Verifique", error.response.data.errors[0].msg, "error");
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());
    try {
      const { data }: { data: AuthProps } = await todoAPI.get<AuthProps>(
        "/auth/validate"
      );

      localStorage.setItem("token", data.user?.token!);

      dispatch(onLogin(data));
    } catch (error) {
      dispatch(onLogout());
      console.log(error);
      localStorage.clear();
    }
  };

  const recoverPassword = async ({ email }: { email: string }) => {
    try {
      await todoAPI.post(`/auth/changuePassword`, { email });
      //dispatch(onNewPassword());
      Swal.fire(
        "Verifique",
        "Se envio un correo con las instrucciones",
        "success"
      );
    } catch (error: any) {
      dispatch(onLogout());
      if (error.response.data.msg) {
        Swal.fire("Verifique", error.response.data.msg, "error");
        return;
      }
      Swal.fire("Verifique", error.response.data.errors[0].msg, "error");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token-init-date");
    dispatch(clearErros());
    dispatch(onLogout());
  };

  const startChanguePassword = async ({
    token,
    password,
  }: {
    token: string | undefined;
    password: string;
  }) => {
    try {
      await todoAPI.post(`/auth/changuePasswordCheck/${token}`, { password });
      dispatch(onNewPassword());
      Swal.fire(
        "Contraseña",
        "contraseña actualizada, puedes loguearte",
        "success"
      );
    } catch (error: any) {
      dispatch(onLogout());
      if (error.response.data.msg) {
        Swal.fire("Verifique", error.response.data.msg, "error");
        return;
      }
      Swal.fire("Verifique", error.response.data.errors[0].msg, "error");
    }
  };

  const startEditName = async ({ name }: { name: string }) => {
    try {
      await todoAPI.put(`/updateUser`, { name });
      dispatch(onNewPassword());
      Swal.fire(
        "Actualizacion",
        "El perfil fue editado exitosament,se reiniciara secion para ver los cambios",
        "success"
      );
    } catch (error: any) {
      dispatch(onLogout());
      if (error.response.data.msg) {
        Swal.fire("Verifique", error.response.data.msg, "error");
        return;
      }
      Swal.fire("Verifique", error.response.data.errors[0].msg, "error");
    }
  };

  return {
    status,
    user,
    errorMessage,
    //*f
    startRegister,
    startLogin,
    logout,
    checkAuthToken,
    recoverPassword,
    startChanguePassword,
    startEditName,
  };
};
