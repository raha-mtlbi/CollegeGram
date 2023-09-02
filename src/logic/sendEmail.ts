import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { recoveryPassword } from "../api/user";

export default function SendEmail() {
  const navigate = useNavigate();

  const handleSubmit = async (
    data: { usernameOrEmail: string },
    { setSubmitting }: any
  ) => {
    try {
      setSubmitting(true);

      await recoveryPassword({ usernameOrEmail: data?.usernameOrEmail });
      toast.success("با موفقیت وارد شدید");
      navigate("/setPassword");
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده");
    } finally {
      setSubmitting(false);
    }
  };

  return handleSubmit;
}
