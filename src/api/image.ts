import { post } from ".";

export const createPost = (data: {
  description: string;
  tag: string[];
  photo?: File;
}) => {
  return post("/createPost", data);
};
