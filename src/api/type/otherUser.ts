import { IUser } from "./user";

export interface IOtherUser {
  user: IUser;
  status?: "Following" | "Blocked";
  reverseStatus?: "Following" | "Blocked";
}
