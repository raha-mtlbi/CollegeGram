import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Signup from "../logic/signup";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";
import eye from "../assets/icons/eye.svg";
import eyeclosed from "../assets/icons/eye-closed.svg";
import HadiInput from "../component/hadiInput";
import { registerSchema } from "../utils/validations";

const Register = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Formik
        validationSchema={registerSchema}
        initialValues={{
          username: "",
          email: "",
          password: "",
          repassword: "",
        }}
        onSubmit={Signup()}
      >
        {(formik) => (
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
                postfix={
                  <img src={person} alt="key" className="absolute mt-3 px-2" />
                }
                value={formik.values.username}
                onChange={(e: any) =>
                  formik.setFieldValue("username", e.target.value)
                }
                error={Boolean(
                  formik.values.username && formik.values.username.length < 4
                )}
                errorText="نام کاربری باید بیشتر از ۴ کارکتر باشد"
              />
            </div>
            <div className="mt-[32px]">
              <Input
                placeholder="ایمیل"
                postfix={
                  <img src={gmail} alt="key" className="absolute mt-3 px-2" />
                }
                value={formik.values.email}
                onChange={(e: any) =>
                  formik.setFieldValue("email", e.target.value)
                }
                error={Boolean(formik.values.email && formik.errors?.email)}
                errorText="لطفا ایمیل را به صورت صحیح وارد کنید"
              />
            </div>
            <div className="mt-[32px]">
              <HadiInput
                prefix={
                  <img src={key} alt="key" className="absolute mt-3 px-2" />
                }
                placeholder="رمز عبور"
                name="password"
                type="password"
              />
            </div>
            <div className="mt-[32px]">
              <Input
                placeholder="تکرار رمز عبور"
                postfix={
                  <img src={key} alt="key" className="absolute mt-3 px-2" />
                }
                prefix={
                  <button onClick={() => setShow(!show)}>
                    <img
                      src={show ? eye : eyeclosed}
                      alt="key"
                      className="w-3 h-3 mt-4"
                    />
                  </button>
                }
                value={formik.values.repassword}
                onChange={(e: any) =>
                  formik.setFieldValue("repassword", e.target.value)
                }
                type={show ? "text" : "password"}
                error={Boolean(
                  formik.values.repassword &&
                    formik.values.repassword !== formik.values.password
                )}
                // errorText="رمز عبور یکسان نیست"
              />
            </div>
            <div className="flex justify-end my-10">
              <Button title={"ثبت نام"} width="100px" type="submit" />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
