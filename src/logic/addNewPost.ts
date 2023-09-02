import { toast } from "react-toastify";
import { createPost } from "../api/image";

export const AddNewPost = ({ onClose }: { onClose: any }) => {
  const handleSubmit = async (
    data: { description: string; tag: string },
    { setSubmitting }: any
  ) => {
    try {
      setSubmitting(true);
      await createPost(data);
      toast.success("با موفقیت وارد شدید");
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده");
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  return handleSubmit;
};
