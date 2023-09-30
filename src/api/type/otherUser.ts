import { IUser } from "./user";

export interface IOtherUser {
  user: IUser;
  status?: "Following" | "Block";
  reverseStatus?: "Following" | "Block";
}
