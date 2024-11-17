 import { jwtDecode } from "jwt-decode";
import { scheduleApi } from "../../../api";
 
interface JwtPayload {
  authorities: string;
}
export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const { data } = await scheduleApi.post("/login", { username, password });
  localStorage.setItem("jwt", data.jwt);

  const decodedToken = jwtDecode<JwtPayload>(data.jwt);
  const authorities = decodedToken.authorities;

  return { ...data, authorities };
};