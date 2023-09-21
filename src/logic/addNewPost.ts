import { toast } from "react-toastify";
import { createPost } from "../api/post";

export const AddNewPost = ({ onClose }: { onClose: () => void }) => {
  const refresh = () => window.location.reload();

  const handleSubmit = async (data: {
    caption: string;
    closeFriend: boolean;
    tags: string[];
    photos?: File[];
  }) => {
    try {
      await createPost({
        caption: data.caption,
        closeFriend: data.closeFriend,
        tags: data.tags,
        photos: data.photos,
      });
      toast.success("پست با موفقیت اضافه شد");
      onClose();
      refresh();
    } catch (error) {
      console.log(error);
      onClose();
    }
  };

  return handleSubmit;
};
