import { Bookmark, LikePost, UnBookmark, UnLikePost } from "../api/post";

export const handleLike = (id: number, setLike: (a: boolean) => void) => {
  try {
    LikePost(id);
    setLike(true);
  } catch (error) {
    console.log(error);
    setLike(false);
  }
};

export const handleUnLike = (id: number, setLike: (a: boolean) => void) => {
  try {
    UnLikePost(id);
    setLike(false);
  } catch (error) {
    console.log(error);
    setLike(true);
  }
};

export const handleBookmark = (id: number, setIsSave: (a: boolean) => void) => {
  try {
    Bookmark(id);
    setIsSave(true);
  } catch (error) {
    console.log(error);
    setIsSave(false);
  }
};

export const handleUnBookmark = (
  id: number,
  setIsSave: (a: boolean) => void
) => {
  try {
    UnBookmark(id);
    setIsSave(false);
  } catch (error) {
    console.log(error);
    setIsSave(true);
  }
};
