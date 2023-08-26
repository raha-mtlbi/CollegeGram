import React from "react";
import Button from "../component/button";
import Input from "../component/input";

import key from "../assets/icons/key1.svg";

const ForgetPass2 = () => {
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
      <div className="mt-[40px] mr-[178px]">
        <Button title={"ثبت رمز عبور جدید"} width="139px" onClick={() => {}} />
      </div>
    </div>
  );
};

export default ForgetPass2;
