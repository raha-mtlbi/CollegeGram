import React from "react";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";

const Register = () => {
  return (
    <div className=" ">
      <form>
        <div className="flex my-3 text-center">
          <p className={"mx-2 text-gray-700"}>ورود به کالج گرام</p>
          <span className="mx-4 text-gray-400 "> |</span>
          <p className={" mx-2 text-gray-400 "}>ثبت نام در کالج گرام</p>
        </div>
        <Input
          placeholder="نام کاربری"
          imageSrc={person}
          imageAlt="UserName"
          className=""
        />
        <Input
          placeholder="ایمیل"
          imageSrc={gmail}
          imageAlt="gmail"
          className=""
        />
        <Input
          placeholder="رمز عبور"
          imageSrc={key}
          imageAlt="key"
          className=""
        />
        <Input
          placeholder="تکرار رمز عبور"
          imageSrc={key}
          imageAlt="repeat key"
          className=""
        />
        <Button title={"ثبت نام"} width="100px" onClick={() => {}} />
      </form>
    </div>
  );
};

export default Register;
