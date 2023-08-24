import React from "react";
import Button from "../component/button";
import Input from "../component/input";

import key from "../assets/icons/key.svg";

const ForgetPass2 = () => {
  return (
    <div>
      <p className="text-[2B2B2B] text-[16px] not-italic font-normal text-center justify-center">
        تنظیم رمز عبور جدید
      </p>
      <Input
        placeholder="رمز عبور"
        imageSrc={key}
        imageAlt="key"
        className="mx-[600]"
      />
      <Input
        placeholder="تکرار رمز عبور"
        imageSrc={key}
        imageAlt="repeat key"
        className="items-center"
      />
      <Button title={"ثبت رمز عبور جدید"} width="100px" onClick={() => {}} />
    </div>
  );
};

export default ForgetPass2;
