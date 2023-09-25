import { toast } from "react-toastify";
import { blockUser, follow, unFollow } from "../api/otherUser";

export const handleBlock = async (
  id: number,
  setBlocks: (a: boolean) => void
) => {
  try {
    const response = await blockUser(id as number);
    setBlocks(true);
    toast(response.msg);
  } catch (error) {
    console.log(error);
    setBlocks(false);
  }
};

export const handleFollow = async (
  id: number,
  setFollows: (a: boolean) => void
) => {
  try {
    const response = await follow(id as number);
    setFollows(true);
    toast.success(response.msg);
  } catch (error) {
    console.log(error);
    setFollows(false);
  }
};

export const handleUnFollow = async (
  id: number,
  setFollows: (a: boolean) => void
) => {
  try {
    const response = await unFollow(id as number);
    setFollows(false);
    toast.success(response.msg);
  } catch (error) {
    console.log(error);
    setFollows(true);
  }
};
