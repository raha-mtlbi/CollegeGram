import { toast } from "react-toastify";
import { createPost } from "../api/image";

export const AddNewPost = () => {
  const handleSubmit = async (
    data: { description: string; tag: string; photo?: File },
    { setSubmitting }: any
  ) => {
    try {
      await createPost({
        description: data.description,
        tag: data.tag.split(" "),
        photo: data.photo,
      });
      toast.success("با موفقیت وارد شدید");
      // onClose();
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده");
      // onClose();
    }
  };

  return handleSubmit;
};
