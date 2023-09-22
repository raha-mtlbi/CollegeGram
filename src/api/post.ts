import { delete_, patch, post } from ".";

export const createPost = (data: {
  caption: string;
  closeFriend: any;
  tags: any;
  photos?: any;
}) => {
  const formData = new FormData();
  data?.caption && formData.append("caption", data?.caption);
  data?.closeFriend && formData.append("closeFriend", data?.closeFriend);
  data?.tags && formData.append("tags", data?.tags);
  data?.photos && formData.append("photos", data?.photos);

  return post("/post", formData);
};

export const UpdatePost = (
  data: {
    caption: string;
    closeFriend: boolean;
    tags: string[];
  },
  id: number
) => {
  return patch(`/post/${id}`, data);
};

export const LikePost = (id: number) => {
  return post(`/post/${id}/like`);
};

export const UnLikePost = (id: number) => {
  return delete_(`/post/${id}/unlike`);
};

export const Bookmark = (id: number) => {
  return post(`/post/${id}/bookmark`);
};

export const UnBookmark = (id: number) => {
  return delete_(`/post/${id}/unbookmark`);
};
