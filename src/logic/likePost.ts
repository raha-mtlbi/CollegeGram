import { toast } from "react-toastify";
import { Bookmark, LikePost, UnBookmark, UnLikePost } from "../api/post";

export const handleLike = async (id: number, setLike: (a: boolean) => void) => {
  try {
    const response = await LikePost(id);
    setLike(true);

    toast.success(response.msg);
  } catch (error) {
    console.log(error);
    setLike(false);
  }
};

export const handleUnLike = async (
  id: number,
  setLike: (a: boolean) => void
) => {
  try {
    const response = await UnLikePost(id);
    setLike(false);

    toast.warning(response.msg);
  } catch (error) {
    console.log(error);
    setLike(true);
  }
};

export const handleBookmark = async (
  id: number,
  setIsSave: (a: boolean) => void
) => {
  try {
    const response = await Bookmark(id);
    setIsSave(true);
    toast.success(response.msg);
  } catch (error) {
    console.log(error);
    setIsSave(false);
  }
};

export const handleUnBookmark = async (
  id: number,
  setIsSave: (a: boolean) => void
) => {
  try {
    const response = await UnBookmark(id);
    setIsSave(false);
    toast.success(response.msg);
  } catch (error) {
    console.log(error);
    setIsSave(true);
  }
};
