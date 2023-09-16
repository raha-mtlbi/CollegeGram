import { toast } from "react-toastify";
import { AddComment } from "../api/comment";

export const AddNewComment = () => {
  const handleSubmit = async (data: { content: any; postId: any; }) => {
    try {
      await AddComment({
        content: data.content,
        postId: data.postId,
      });
      toast.success("نظر شما با موفقیت ثبت شد.");
      // onClose();
    } catch (error) {
      console.log(error);
      // onClose();
    }
  };

  return handleSubmit;
};
