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
    try {
      const { data }: { data: AuthProps | ErrosLogin } = await todoAPI.post(
        "/auth/register"
      );
      console.log(data);
    } catch (error) {
      console.log(error);
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
      if (error.response.data.msg) {
        Swal.fire("Verifique", error.response.data.msg, "error");
        return;
      }
      const response = error.response.data.errors[0].msg;
      console.log(response);
      //success'
      Swal.fire("Verifique", error.response.data.errors[0].msg, "error");
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());
    try {
      const { data }: { data: CheckToken } = await todoAPI.get(
        "/auth/validate"
      );

      const { token, uid, name } = data;

      localStorage.setItem("token", token);

      dispatch(onLogin({ name, uid }));
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const Logout = () => {
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
    Logout,
    checkAuthToken,
  };
};
