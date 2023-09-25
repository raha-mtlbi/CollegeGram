import { IUser } from "./user";

export interface IImage {
  caption: string;
  closeFriend: boolean;
  commentsCount: number;
  id: number;
  photos: string[];
  likesCount: number;
  photosCount: number;
  bokmarksCount: number;
  tags: string[];
  createdAt: Date;
  photo: File;
  user: IUser;
}
