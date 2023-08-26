import React from "react";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";

const Register = () => {
  return (
    <div>
      <form>
        <div className="flex my-3 text-center">
          <p className={"mx-2 text-gray-400"}>ورود به کالج گرام</p>
          <span className="mx-4 text-gray-400 "> |</span>
          <p className={" mx-2 text-gray-700 "}>ثبت نام در کالج گرام</p>
        </div>
        <div className="mt-[49px]">
          <Input
            placeholder="نام کاربری"
            imageSrc={person}
            imageAlt="UserName"
          />
        </div>
        <div className="mt-[32px]">
          <Input placeholder="ایمیل" imageSrc={gmail} imageAlt="gmail" />
        </div>
        <div className="mt-[32px]">
          <Input placeholder="رمز عبور" imageSrc={key} imageAlt="key" />
        </div>
        <div className="mt-[32px]">
          <Input
            placeholder="تکرار رمز عبور"
            imageSrc={key}
            imageAlt="repeat key"
          />
        </div>
        <div className="mt-[40px] mr-[220px]">
          <Button title={"ثبت نام"} width="100px" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
};

export default Register;
