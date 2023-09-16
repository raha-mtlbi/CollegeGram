import { IUser } from "./user";

export interface IComment {
  id: string;
  content: string;
  postId: number;
  parentId: number;
  createdAt: Date;
  authorProfile: string;
  author: IUser;
}
