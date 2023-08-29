import { get, post } from ".";

export interface IUser {
  _id: string;
  avatar: string;
  username: string;
  usernameOrEmail: string;
  createdAt: number;
  updatedAt: number;
  __v: number;
}

export const login = (usernameOrEmail: string, password: string) => {
  return post<{ token: string; user: IUser }>("/user/login", {
    usernameOrEmail,
    password,
  });
};

export const register = (usernameOrEmail: string, password: string, token?: string) => {
  return post<{ token: string; user: IUser }>("/user/signup", {
    usernameOrEmail,
    password,
    token,
  });
};

export const getMe = () => {
  return get<IUser>("/user/me");
};
