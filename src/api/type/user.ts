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
  usernameOrEmail: string;
  block: boolean;
}
