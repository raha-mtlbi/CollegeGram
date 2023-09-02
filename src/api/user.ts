import { get, post } from ".";
import { IUser } from "./type/user";

export const login = (usernameOrEmail: string, password: string) => {
  return post<{ accessToken: string; user: IUser }>("/user/login", {
    usernameOrEmail,
    password,
  });
};

export const register = (
  username: string,
  email: string,
  password: string,
  token?: string
) => {
  return post<{ accessToken: string; user: IUser }>("/user/signup", {
    username,
    email,
    password,
    token,
  });
};

export const getMe = () => {
  return get<IUser>("/user/me");
};

export const recoveryPassword = (data: { usernameOrEmail: string }) => {
  return post<{ usernameOrEmail: string }>("/user/forgetpassword", data);
};
