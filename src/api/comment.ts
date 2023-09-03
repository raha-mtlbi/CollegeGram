import { post } from ".";

export const AddComment = (data: { content: string; postId: string }) => {
  return post("/comment", data);
};
