import { toast } from "react-toastify"
import { createPost } from "../api/image"

export const AddNewPost = () => {
  const handleSubmit = async (
    data: { caption: string; tags: string; photos?: File },
    { setSubmitting }: any
  ) => {
    try {
      await createPost({
        caption: data.caption,
        tags: data.tags.split(" "),
        photos: data.photos,
      })
      toast.success("با موفقیت وارد شدید")
      // onClose();
    } catch (error) {
      console.log(error)
      toast.error("مشکلی پیش آمده")
      // onClose();
    }
  }

  return handleSubmit
}
