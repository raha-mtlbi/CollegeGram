import { toast } from "react-toastify";
import { UpdatePost } from "../api/post";

export const EditPost = ({
  id,
  onClose,
}: {
  id: number;
  onClose: () => void;
}) => {
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
      window.location.reload();
      toast.success("پست با موفقیت به روزرسانی شد");
      onClose();
    } catch (error) {
      console.log(error);
      onClose();
    }
  };

  return handleSubmit;
};
