import { toast } from "react-toastify";
import { AddComment } from "../api/comment";
import { get } from "../api";

export const AddNewComment = ({
  setComment,
  postId,
  parentId,
}: {
  setComment: any;
  postId: any;
  parentId?: number | null;
}) => {
  const handleSubmit = async (data: {
    content: string;
    postId: any;
    parentId?: number | null;
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
