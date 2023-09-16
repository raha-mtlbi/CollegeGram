import { toast } from "react-toastify";
import { createPost } from "../api/image";

export const AddNewPost = () => {
  const handleSubmit = async (data: {
    caption: string;
    closeFriend: boolean;
    tags: string[];
    photos?: File;
  }) => {
    try {
      await createPost({
        caption: data.caption,
        closeFriend: data.closeFriend,
        tags: data.tags,
        photos: data.photos,
      });
      toast.success("پست با موفقیت اضافه شد");
    } catch (error) {
      console.log(error);
    }
  };

  return handleSubmit;
};
