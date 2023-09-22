import { delete_, post } from ".";

export const AddComment = (data: {
  content: string;
  postId: number;
  parentId: number;
}) => {
  return post("/comment", data);
};

export const LikeComment = (id: number) => {
  return post(`/comment/${id}/like`);
};

export const UnLikeComment = (id: number) => {
  return delete_(`/comment/${id}/unlike`);
};
