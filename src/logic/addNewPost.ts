import React from "react";
import { toast } from "react-toastify";
import { createPost } from "../api/post";

export const AddNewPost = ({
  onClose,
  setLoading,
}: {
  onClose: () => void;
  setLoading: any;
}) => {
  const handleSubmit = async (data: {
    caption: string;
    closeFriend: boolean;
    tags: string[];
    photos?: File[];
  }) => {
    try {
      setLoading(true);
      await createPost({
        caption: data.caption,
        closeFriend: data.closeFriend,
        tags: data.tags,
        photos: data.photos,
      });
      setLoading(false);
      onClose();
      toast.success("پست با موفقیت اضافه شد");
      window.location.reload();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return handleSubmit;
};
