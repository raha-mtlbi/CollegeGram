import { delete_, get, patch, post } from ".";
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

export const Logout = (id?: number) => {
  return delete_<IUser>("/user/logout");
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

export const EditProfile = (data: any) => {
  const formData = new FormData();
  data.photo && formData.append("profile", data.photo);
  data.email && formData.append("email", data.email);
  data.name && formData.append("name", data.name);
  data.lastname && formData.append("lastname", data.lastname);
  data.username && formData.append("username", data.username);
  data.password && formData.append("password", data.password);
  data.private && formData.append("private", data.private);
  data.bio && formData.append("bio", data.bio);

  return patch("/user/me", formData);
};

export const RemoveProfile = (data: { removeProfiel: boolean }) => {
  return patch("/user/me", { removeProfile: true });
};
