import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { changePassword } from "../api/user";
import { useEffect, useState } from "react";

export default function SetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [urlToken,setUrlToken]=useState<any>()

 

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const token = urlSearchParams.get('token')
    if (urlSearchParams.has('token')){
        setUrlToken(token)
    }
  }, []);
  const handleSubmit = async (data: { newPassword: string; token: string }) => {
    try {
      await changePassword({
        newPassword: data.newPassword,
        token:urlToken ,
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
