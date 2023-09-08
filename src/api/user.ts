import { get, patch, post } from ".";
import { IUser } from "./type/user";

export const login = (usernameOrEmail: string, password: string) => {
  return post<{
    accessToken: string;
    refreshToken?: string;
    user: IUser;
  }>("/user/login", {
    usernameOrEmail,
    password,
  });
};

export const register = (username: string, email: string, password: string) => {
  return post<{ accessToken: string; refreshToken?: string; user: IUser }>(
    "/user/signup",
    {
      username,
      email,
      password,
    }
  );
};

export const getMe = () => {
  return get<IUser>("/user/me");
};

export const recoveryPassword = (data: { usernameOrEmail: string }) => {
  return post<{ usernameOrEmail: string }>("/user/forgetpassword", data);
};

export const changePassword = (data: {
  newPassword: string;
  token: string;
}) => {
  return post<{ newPassword: string }>("/user/setnewpassword", data);
};

export const EditProfile = (data:any) => {
  return patch("/user/me", data);
};
