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
      });

      toast.success("با موفقیت وارد شدید");
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده");
    }
  };

  return handleSubmit;
}
