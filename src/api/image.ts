import { patch, post } from ".";

export const createPost = (data: {
  caption: string;
  closeFriend: boolean;
  tags: string[];
  photos?: File;
}) => {
  return post("/post", data);
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
