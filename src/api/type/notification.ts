import { IComment } from "./comment";
import { IImage } from "./images";
import { IUser } from "./user";

export interface INotification {
  id: number;
  user: IUser;
  actor: IUser;
  type: "Follow" | "request" | "like" | "comment";
  relation: "pending" | "blocked" | "Following" | undefined;
  reverseRelation: "pending" | "blocked" | "Following" | undefined;
  post: IImage;
  comment: IComment;
  createdAt: Date;
}
