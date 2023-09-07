import { post } from ".";

<<<<<<< HEAD
export const AddComment = (data: { content: string; postId: number }) => {
=======
export const AddComment = (data: { content: string; postId: string }) => {
>>>>>>> 1670c02db9279f5b4ccd1a8fabcf1d3b1b1a7dcc
  return post("/comment", data);
};
