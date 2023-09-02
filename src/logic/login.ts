import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../store";
import { loginThunk } from "../features/userSlice";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (data: {
    usernameOrEmail: string;
    password: string;
    // file: File;
    arrey: [{ id: 1 }];
  }) => {
    try {
      await dispatch(
        loginThunk({
          password: data.password,
          usernameOrEmail: data.usernameOrEmail,
          // file: data.file,
          arrey: [{ id: 1 }],
        })
      ).unwrap();

      toast.success("با موفقیت وارد شدید");
      navigate("/myCollegeGram");
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده");
    }
  };

  return handleSubmit;
}
