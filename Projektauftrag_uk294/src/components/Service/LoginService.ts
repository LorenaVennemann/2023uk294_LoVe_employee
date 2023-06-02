import { AxiosInstance } from "axios";

const AuthorizationService = (api: AxiosInstance) => ({
  loginUser: async (email: string, password: string) => {
    const input = {
      email: email,
      password: password,
    };
    const data = await api.post("login", input);
    return data["data"]["accessToken"];
  },
});

export default AuthorizationService;
