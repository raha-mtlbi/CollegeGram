import { toast } from "react-toastify";
import { EditProfile } from "../api/user";

export default function EditProfileSubmit({
  onClose,
}: {
  onClose: () => void;
}) {
  const handleSubmit = async (data: {
    email: "";
    password: "";
    repeatPassword: "";
    name: "";
    lastname: "";
    bio: "";
    private: boolean;
    photo?: File;
  }) => {
    try {
      await EditProfile({
        email: data.email,
        password: data.password,
        repeatPassword: data.repeatPassword,
        name: data.name,
        lastname: data.lastname,
        bio: data?.bio,
        private: data.private,
        photo: data.photo,
      });

      toast.success("اطلاعات شما با موفقیت به روززسانی شد.");
      onClose();
    } catch (error: any) {
      console.log(error);
      toast.error(error.message?.message || "مشکلی پیش آمده");
      onClose();
    }
  };

  return handleSubmit;
}
