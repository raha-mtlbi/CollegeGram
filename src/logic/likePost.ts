import { Bookmark, LikePost, UnBookmark, UnLikePost } from "../api/post";

export const handleLike = async (id: number, setLike: (a: boolean) => void) => {
  try {
    await LikePost(id);
    setLike(true);
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
    await UnLikePost(id);
    setLike(false);
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
    await Bookmark(id);
    setIsSave(true);
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
    await UnBookmark(id);
    setIsSave(false);
  } catch (error) {
    console.log(error);
    setIsSave(true);
  }
};
