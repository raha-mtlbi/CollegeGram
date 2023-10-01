import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Signup from "../logic/signup";
import { registerSchema } from "../utils/validations";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";

const Register = () => {
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
                onBlur={formik.handleBlur}
                error={Boolean(
                  formik.errors?.username && formik.touched?.username
                )}
                errorText={formik.touched.username && formik.errors?.username}
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
                onBlur={formik.handleBlur}
                error={Boolean(formik.errors?.email && formik.touched?.email)}
                errorText={formik.touched.email && formik.errors?.email}
              />
            </div>
            <div className="mt-[32px]">
              <Input
                type="password"
                placeholder="ایمیل"
                postfix={
                  <img src={key} alt="key" className="absolute mt-3 px-2" />
                }
                value={formik.values.password}
                onChange={(e: any) =>
                  formik.setFieldValue("password", e.target.value)
                }
                onBlur={formik.handleBlur}
                error={Boolean(
                  formik.errors?.password && formik.touched?.password
                )}
                errorText={formik.touched.password && formik.errors?.password}
              />
            </div>
            <div className="mt-[32px]">
              <Input
                type="password"
                placeholder="تکرار رمز عبور"
                postfix={
                  <img src={key} alt="key" className="absolute mt-3 px-2" />
                }
                value={formik.values.repassword}
                onChange={(e: any) =>
                  formik.setFieldValue("repassword", e.target.value)
                }
                onBlur={formik.handleBlur}
                error={Boolean(
                  formik.errors?.repassword && formik.touched?.repassword
                )}
                errorText={
                  formik.touched.repassword && formik.errors?.repassword
                }
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
