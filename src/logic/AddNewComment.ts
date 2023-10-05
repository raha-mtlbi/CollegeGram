import { toast } from "react-toastify";
import { AddComment } from "../api/comment";
import { get } from "../api";

export const AddNewComment = ({
  setComment,
  postId,
}: {
  setComment: any;
  postId: any;
}) => {
  const handleSubmit = async (data: {
    content: any;
    postId: any;
    parentId: any;
  }) => {
    try {
      const response = await AddComment({
        content: data.content || "",
        postId: data.postId,
        parentId: data?.parentId,
      });
      const newData = await get(`/comment/${postId}`);
      setComment(newData);
      toast.success(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return handleSubmit;
};
