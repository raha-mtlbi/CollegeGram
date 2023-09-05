import { toast } from "react-toastify";
import { EditProfile } from "../api/user";

export default function EditProfileSubmit() {
  const handleSubmit = async (data: {
    email: "";
    password: "";
    repeatPassword: "";
    name: "";
    lastName: "";
  }) => {
    try {
      await EditProfile({
        email: data.email,
        password: data.password,
        repeatPassword: data.repeatPassword,
        name: data.name,
        lastName: data.lastName,
      });

      toast.success("با موفقیت وارد شدید");
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده");
    }
  };

  return handleSubmit;
}
