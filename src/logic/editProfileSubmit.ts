import { toast } from "react-toastify";
import { EditProfile } from "../api/user";
import { useAppDispatch } from "../store";
import { getCurrentUser } from "../features/userSlice";

export default function EditProfileSubmit({
  onClose,
  setLoading,
}: {
  onClose: () => void;
  setLoading: any;
}) {
  const dispatch = useAppDispatch();
  const handleSubmit = async (data: {
    email: string;
    password: string;
    repeatPassword: string;
    name: string;
    lastname: string;
    bio: string;
    private: boolean;
    photo?: any;
  }) => {
    try {
      setLoading(true);
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
      dispatch(getCurrentUser());
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message?.message || "مشکلی پیش آمده");
      onClose();
      setLoading(false);
    }
  };

  return handleSubmit;
}
