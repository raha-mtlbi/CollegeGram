import { post } from "."

export const createPost = (data: {
  caption: string;
  closeFriend: boolean;
  tags: string[];
  photos?: File;
}) => {
  const formData = new FormData();
  data.photos && formData.append("photo", data.photos);

  return post("/post", data);
};
