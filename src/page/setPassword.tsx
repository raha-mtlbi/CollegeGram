import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../component/button";
import Input from "../component/input";

import key from "../assets/icons/key1.svg";

const ForgetPassword = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-[2B2B2B] text-[16px] not-italic font-normal text-center justify-center">
        تنظیم رمز عبور جدید
      </p>
      <div className="mt-[49px]">
        <Input
          placeholder="رمز عبور"
          postfix={<img src={key} alt="key" className="absolute mt-3 px-2" />}
        />
      </div>
      <div className="mt-[32px]">
        <Input
          placeholder="تکرار رمز عبور"
          postfix={<img src={key} alt="key" className="absolute mt-3 px-2" />}
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
