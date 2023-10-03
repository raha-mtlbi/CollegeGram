import { IImage } from "./images";
import { IUser } from "./user";

export interface IComment {
  id: number;
  content: string;
  postId: IImage;
  parentId: number;
  createdAt: Date;
  authorProfile: string;
  author: IUser;
  likeCount: number;
  ifLiked: boolean;
}
