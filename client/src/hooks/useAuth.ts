import { useDispatch, useSelector } from "react-redux";
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
    } catch (error) {
      console.log(error);
    }
  };

  const startLogin = async ({ email, password }: LoginOrRegister) => {
    dispatch(onChecking());
    try {
      const { data }: { data: AuthProps | ErrosLogin } = await todoAPI.post(
        "/auth/login",
        {
          email,
          password,
        }
      );
    } catch (error) {
      console.log(error);
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
