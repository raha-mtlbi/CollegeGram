import { useNavigate } from "react-router-dom";
import Button from "../component/button";
import Input from "../component/input";

import key from "../assets/icons/key1.svg";
import { useState } from "react";
import React from "react";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isError, setIsError] = useState({ error: false, message: "" });

  const reset = () => {
    setPassword("");
  };
  return (
    <div>
      <p className="text-[2B2B2B] text-[16px] not-italic font-normal text-center justify-center">
        تنظیم رمز عبور جدید
      </p>
      <div className="mt-[49px]">
        <Input placeholder="رمز عبور" imageSrc={key} imageAlt="key" />
      </div>
      <div className="mt-[32px]">
        <Input
          placeholder="تکرار رمز عبور"
          imageSrc={key}
          imageAlt="repeat key"
        />
      </div>
      <div className="flex justify-end my-10">
        <Button
          title={"ثبت رمز عبور جدید"}
          width="139px"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default ForgetPassword;
