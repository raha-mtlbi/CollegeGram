import { IComment } from "./comment";
import { IImage } from "./images";
import { IUser } from "./user";

export interface INotification {
  id: number;
  user: IUser;
  actor: IUser;
  type: "Follow" | "Request" | "Like" | "Comment" | "Accept" | "Reject";
  relation: "Pending" | "Blocked" | "Following" | undefined;
  reverseRelation: "Pending" | "Blocked" | "Following" | undefined;
  post: IImage;
  comment: IComment;
  createdAt: Date;
}
