import { post } from ".";

export const createPost = (data: {
  caption: string;
  closeFriend: boolean;
  tags: string[];
  photos?: File;
}) => {
  return post("/post", data);
};
