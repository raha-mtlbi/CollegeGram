import { IUser } from "./user";

export interface IComment {
  id: number;
  content: string;
  postId: number;
  parentId: number;
  createdAt: Date;
  authorProfile: string;
  author: IUser;
  likeCount: number;
}
