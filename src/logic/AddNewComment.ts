import { toast } from "react-toastify";
import { AddComment } from "../api/comment";

export const AddNewComment = () => {
  const refresh = () => window.location.reload();

  const handleSubmit = async (data: {
    content: any;
    postId: any;
    parentId: number;
  }) => {
    try {
      await AddComment({
        content: data.content,
        postId: data.postId,
      });
      toast.success("نظر شما با موفقیت ثبت شد.");

      // refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return handleSubmit;
};
