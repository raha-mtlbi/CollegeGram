export interface IUser {
  bio: string;
  id: number;
  photo: any;
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
  createdAt: Date;
  removeProfile: boolean;
  ifLiked: boolean;
  ifBookmarked: boolean;
}
