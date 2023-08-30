import { get, post } from ".";

export interface IUser {
  bio: string;
  id: string;
  photo: string;
  username: string;
  email: string;
  followers: number;
  following: number;
  lastname: string;
  name: string;
  postsCount: number;
  private: boolean;
}

export const login = (usernameOrEmail: string, password: string) => {
  return post<{ token: string; user: IUser }>("/user/login", {
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
  return post<{ token: string; user: IUser }>("/user/signup", {
    username,
    email,
    password,
    token,
  });
};

export const getMe = () => {
  return get<IUser>("/user/me");
};

export const recoveryPassword = (data: { email: string }) => {
  return post<{ email: string }>("/user/", data);
};
