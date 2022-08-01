import { useDispatch, useSelector } from "react-redux";
import {
  onChecking,
  onRegister,
  onLogin,
  onLogout,
  clearErros,
} from "../index";

export const useAuth = () => {
  const { status, user, errorMessage } = useSelector<unknown, any>(
    (state: any) => state.auth
  );
  const dispatch = useDispatch();

  const startRegister = async () => {};
  const startLogin = async () => {};
  const startLogout = () => {};

  return {
    status,
    user,
    errorMessage,
    //*f
    startRegister,
    startLogin,
    startLogout,
  };
};
