import { toast } from "react-toastify";
import { AddComment } from "../api/comment";

export const AddNewComment = () => {
  const handleSubmit = async (data: { content: ""; postId: number }) => {
    try {
      await AddComment({
        content: data.content,
        postId: data.postId,
      });
      toast.success("نظر شما با موفقیت ثبت شد.");
      // onClose();
    } catch (error) {
      console.log(error);
      toast.error("لطفا مجدد نظر خود را وارد کنید.مشکلی پیش آمده");
      // onClose();
    }
  };

  return handleSubmit;
};
