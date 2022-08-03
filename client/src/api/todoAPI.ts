import axios from "axios";

// import { getEnvVariables } from "../helpers";
// const { VITE_API_URL } = getEnvVariables();

const todoAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

todoAPI.interceptors.request.use((config: any) => {
  config.headers = {
    "x-token": localStorage.getItem("token"),
  };

  return config;
});
export default todoAPI;
