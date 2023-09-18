export interface IUser {
  bio: string;
  id: number;
  photo: string;
  username: string;
  email: string;
  followers: number;
  following: number;
  lastname: string;
  name: string;
  postsCount: number;
  private: boolean;
  usernameOrEmail: string;
  block: boolean;
}
