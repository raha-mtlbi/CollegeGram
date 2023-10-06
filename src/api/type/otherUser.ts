import { IUser } from "./user";

export interface IOtherUser {
  user: IUser;
  status?: "Following" | "Blocked" | "Pending";
  reverseStatus?: "Following" | "Blocked" | "Pending";
}
