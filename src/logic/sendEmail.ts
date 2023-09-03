import { toast } from "react-toastify";

import { recoveryPassword } from "../api/user";

export default function SendEmail() {
  const handleSubmit = async (
    data: { usernameOrEmail: string },
    { setSubmitting }: any
  ) => {
    try {
      setSubmitting(true);

      await recoveryPassword({ usernameOrEmail: data?.usernameOrEmail });
      toast.success("ایمیل با موفقیت ارسال شد.");
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده");
    } finally {
      setSubmitting(false);
    }
  };

  return handleSubmit;
}
