import { IUser } from "./user";

export interface IOtherUser {
  user: IUser;
  status?: "follow" | "block";
  reversStatue?: "follow" | "block";
}
