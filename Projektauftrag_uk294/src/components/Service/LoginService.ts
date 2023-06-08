import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const login = (api: AxiosInstance = defaultAxiosInstance) => ({
  loginUser: async (email: string, password: string) => {
    const input = {
      email: email,
      password: password,
    };
    const data = await api.post("login", input);
    console.log("login done")
    return data["data"]["accessToken"];
  },
});

export default login;