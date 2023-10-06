import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { changePassword } from "../api/user";

export default function SetPassword({ token }: { token: string }) {
  const navigate = useNavigate();

  const handleSubmit = async (data: { newPassword: string }) => {
    try {
      const resp = await changePassword({
        newPassword: data.newPassword,
        token: token,
      });
      toast.success(resp.msg);
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return handleSubmit;
}
