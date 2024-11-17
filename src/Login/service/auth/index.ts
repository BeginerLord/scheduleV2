import { jwtDecode } from "jwt-decode";
import { scheduleApi } from "../../../api";
import { LoginDto } from "../../model/login";


interface JwtPayload {
  role: string;
}
export const AuthUser = async (login: LoginDto) => {
  const { data } = await scheduleApi.post("/login", login);

  localStorage.setItem("token", data.jwt);
  const decodedToken = jwtDecode<JwtPayload>(data.jwt);
  const role = decodedToken.role;
  return { ...data, role };
};