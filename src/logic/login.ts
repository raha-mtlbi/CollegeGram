import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../store";
import { getCurrentUser, loginThunk } from "../features/userSlice";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (data: {
    usernameOrEmail: string;
    password: string;
  }) => {
    try {
      await dispatch(
        loginThunk({
          password: data.password,
          usernameOrEmail: data.usernameOrEmail,
        })
      ).unwrap();
      dispatch(getCurrentUser());

      toast.success("با موفقیت وارد شدید");
      navigate("/myCollegeGram");
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده");
    }
  };

  return handleSubmit;
}
