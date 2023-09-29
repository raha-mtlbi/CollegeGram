import { toast } from "react-toastify";
import {
  acceptRequest,
  blockUser,
  follow,
  rejectRequest,
  unFollow,
} from "../api/otherUser";

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

export const handleAccept = async (id: number) => {
  try {
    const response = await acceptRequest(id as number);
    toast.success(response.msg);
  } catch (error) {
    console.log(error);
  }
};

export const handleReject = async (id: number) => {
  try {
    const response = await rejectRequest(id as number);
    toast.success(response.msg);
  } catch (error) {
    console.log(error);
  }
};
