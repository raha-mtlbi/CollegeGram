import { IUser } from "./user";

export interface ICollegians {
  posts: {
    author: number;
    closeFriend: boolean;
    id: number;
    photos: File;
  };
  user: IUser;
}
