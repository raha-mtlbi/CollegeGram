import { toast } from "react-toastify";
import { UpdatePost } from "../api/post";

export const EditPost = ({
  id,
  onClose,
  setLoading,
}: {
  id: number;
  onClose: () => void;
  setLoading: any;
}) => {
  const handleSubmit = async (data: {
    caption: string;
    closeFriend: boolean;
    tags: string[];
  }) => {
    try {
      setLoading(true);
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
      setLoading(true);
    } catch (error) {
      console.log(error);
      onClose();
      setLoading(true);
    }
  };

  return handleSubmit;
};
