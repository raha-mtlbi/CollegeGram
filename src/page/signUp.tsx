import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import Signup from "../logic/signup";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("لطفا ایمیل معتبری وارد کنید")
    .email("لطفا ایمیل معتبری وارد کنید"),
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "رمز عبور شما مناسب نیست"
    )
    .required("ورود رمز عبور الزامی است."),
  repassword: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور شما منطبق نیست")
    .required("لطفا رمز عبور خود را تایید کنید"),
});

const Register = () => {
  const formik = useFormik({
    initialValues: { username: "", email: "", password: "", repassword: "" },
    enableReinitialize: true,
    validationSchema: schema,
    onSubmit: Signup(),
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex mt-8 mb-2 text-center justify-center ">
          <Link to="/login" className={"mx-2 text-gray-400"}>
            ورود به کالج گرام
          </Link>
          <span className="mx-4 text-gray-400 "> |</span>
          <Link to="/signup" className={" mx-2 text-gray-700 "}>
            ثبت نام در کالج گرام
          </Link>
        </div>
        <div className="mt-[49px]">
          <Input
            placeholder="نام کاربری"
            imageSrc={person}
            imageAlt="UserName"
            value={formik.values.username}
            onChange={(e: any) =>
              formik.setFieldValue("username", e.target.value)
            }
            error={Boolean(
              formik.values.username && formik.values.username.length < 4
            )}
            errorText="نام کاربری باید بیشتر از ۴ کارکتر باشد"
          />
          {/* <span className="text-[#]">{username && messages.error2}</span> */}
        </div>
        <div className="mt-[32px]">
          <Input
            placeholder="ایمیل"
            imageSrc={gmail}
            imageAlt="gmail"
            value={formik.values.email}
            onChange={(e: any) => formik.setFieldValue("email", e.target.value)}
            error={Boolean(formik.values.email && formik.errors?.email)}
            errorText="لطفا ایمیل را به صورت صحیح وارد کنید"
          />
        </div>
        <div className="mt-[32px]">
          <Input
            placeholder="رمز عبور"
            imageSrc={key}
            imageAlt="key"
            value={formik.values.password}
            onChange={(e: any) =>
              formik.setFieldValue("password", e.target.value)
            }
            type="password"
            error={Boolean(formik.values.password && formik.errors?.password)}
            errorText="رمز عبور اشتباه است."
          />
        </div>
        <div className="mt-[32px]">
          <Input
            placeholder="تکرار رمز عبور"
            imageSrc={key}
            imageAlt="repeat key"
            value={formik.values.repassword}
            onChange={(e: any) =>
              formik.setFieldValue("repassword", e.target.value)
            }
            type="password"
            error={Boolean(
              formik.values.repassword &&
                formik.values.repassword !== formik.values.password
            )}
            errorText="رمز عبور یکسان نیست"
          />
        </div>
        <div className="flex justify-end my-10">
          <Button title={"ثبت نام"} width="100px" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Register;
