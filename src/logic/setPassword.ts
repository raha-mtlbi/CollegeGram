import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { changePassword } from "../api/user";

export default function SetPassword({ token }: { token: string }) {
  const navigate = useNavigate();

  const handleSubmit = async (data: { newPassword: string; token: string }) => {
    try {
      await changePassword({
        newPassword: data.newPassword,
        token: token,
      });
      toast.success("");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("");
    } finally {
    }
  };

  return handleSubmit;
}
