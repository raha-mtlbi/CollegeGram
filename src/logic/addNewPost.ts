import { toast } from "react-toastify";
import { createPost } from "../api/image";

export const AddNewPost = (uploadedImages: FileList[]) => {
  const handleSubmit = async (
    data: {
      caption: string;
      closeFriend: boolean;
      tags: string;
      photos: FileList[];
    },
    { setSubmitting }: any
  ) => {
    try {
      await createPost({
        caption: data.caption,
        closeFriend: data.closeFriend,
        tags: data.tags.split(" "),
        photos: [...data.photos, ...uploadedImages],
      });
      toast.success("پست با موفقیت اضافه شد");
    } catch (error) {
      toast.error("مشکلی پیش آمده");
    }
  };

  return handleSubmit;
};
