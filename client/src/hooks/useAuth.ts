import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import todoAPI from "../api/todoAPI";
import {
  onChecking,
  onRegister,
  onLogin,
  onLogout,
  clearErros,
} from "../index";
import {
  AuthProps,
  ErrosLogin,
  LoginOrRegister,
  CheckToken,
} from "./interfaces/interfacesAuth";

export const useAuth = () => {
  const { status, user, errorMessage } = useSelector<unknown, any>(
    (state: any) => state.auth
  );
  const dispatch = useDispatch();

  const startRegister = async ({ name, email, password }: LoginOrRegister) => {
    dispatch(onChecking());
    try {
      const { data }: { data: AuthProps | ErrosLogin } = await todoAPI.post(
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
      const { data }: { data: AuthProps } = await todoAPI.post("/auth/login", {
        email,
        password,
      });
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
      const { data }: { data: AuthProps } = await todoAPI.get("/auth/validate");

      localStorage.setItem("token", data.user?.token!);

      dispatch(onLogin(data));
    } catch (error) {
      dispatch(onLogout());
      console.log(error);
      localStorage.clear();
    }
  };

  const recoverPassword = ({ email }: { email: string }) => {
    //*Recuperar cuenta
    console.log(email);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token-init-date");
    dispatch(clearErros());
    dispatch(onLogout());
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
  };
};
