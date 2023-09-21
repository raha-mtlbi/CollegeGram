import { patch, post } from ".";

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
  id: string
) => {
  return patch(`/post/${id}`, data);
};
