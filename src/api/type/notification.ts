import { IComment } from "./comment";
import { IImage } from "./images";
import { IUser } from "./user";

export interface INotification {
  id: number;
  user: IUser;
  actor: IUser;
  type: "follow" | "request" | "like" | "comment";
  relation: "pending" | "blocked" | "following" | undefined;
  reverseRelation: "pending" | "blocked" | "following" | undefined;
  post: IImage;
  comment: IComment;
  createdAt: Date;
}
