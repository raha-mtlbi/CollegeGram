import { toast } from "react-toastify";
import { UpdatePost } from "../api/post";

export const EditPost = ({ id }: { id: number }) => {
  const handleSubmit = async (data: {
    caption: string;
    closeFriend: boolean;
    tags: string[];
  }) => {
    try {
      await UpdatePost(
        {
          caption: data.caption,
          closeFriend: data.closeFriend,
          tags: data.tags,
        },
        id
      );
      toast.success("پست با موفقیت به روزرسانی شد");
    } catch (error) {
      console.log(error);
    }
  };

  return handleSubmit;
};
