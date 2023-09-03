import { post } from ".";

export const AddComment = (data: { content: string; postId: number }) => {
  return post("/comment", data);
};
