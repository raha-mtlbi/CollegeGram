import { toast } from "react-toastify";
import { Bookmark, LikePost, UnBookmark, UnLikePost } from "../api/post";

export const handleLike = async (id: number) => {
  try {
    const response = await LikePost(id);

    toast.success(response.msg);
  } catch (error) {
    console.log(error);
  }
};

export const handleUnLike = async (id: number) => {
  try {
    const response = await UnLikePost(id);

    toast.success(response.msg);
  } catch (error) {
    console.log(error);
  }
};

export const handleBookmark = async (id: number) => {
  try {
    const response = await Bookmark(id);
    toast.success(response.msg);
  } catch (error) {
    console.log(error);
  }
};

export const handleUnBookmark = async (id: number) => {
  try {
    const response = await UnBookmark(id);
    toast.success(response.msg);
  } catch (error) {
    console.log(error);
  }
};
