import React from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";

const Register = () => {
  const location = useLocation();
  return (
    <div className=" ">
      <form>
        <p className="my-3 text-center">
          <Link
            className={
              location.pathname === "/login"
                ? "text-gray-700"
                : "text-gray-400 "
            }
            to={"/login"}
          >
            ورود به کالج گرام
          </Link>
          <span className="mx-4 text-gray-400 "> |</span>
          <Link
            className={
              location.pathname === "/register"
                ? "text-gray-700"
                : "text-gray-400 "
            }
            to={"/register"}
          >
            ثبت نام در کالج گرام
          </Link>
        </p>
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
        <Button title={"ثبت نام"} width="100px" />
      </form>
    </div>
  );
};

export default Register;
