import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import * as Yup from "yup";
// import { getCurrentUser, registerThunk } from "../features/userSlice";
// import { useFormik } from "formik";
// import { error } from "console";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";

import { useAppDispatch } from "../store";
import React from "react";

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .required("لطفا ایمیل معتبری وارد کنید")
//     .email("لطفا ایمیل معتبری وارد کنید"),
//   password: Yup.string()
//     .trim()
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
//       "رمز عبور شما مناسب نیست"
//     )
//     .required("ورود رمز عبور الزامی است."),
//   repassword: Yup.string()
//     .oneOf([Yup.ref("password")], "رمز عبور شما منطبق نیست")
//     .required("لطفا رمز عبور خود را تایید کنید"),
// });

const Register = () => {
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isError, setIsError] = useState({ error: false, message: "" });

  const reset = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };
  const messages: any = {
    error1: "فیلدها را کامل کنید",
    error2: "نام کابری اشتباه است",
    error3: "لطفا ایمیل معتبری وارد کنید",
    error4: "رمز عبور شما مناسب نیست",
    error5: "تکرار رمز عبور صحیح نمیباشد",
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (
      username === "" ||
      email === "" ||
      password === "" ||
      repeatPassword === ""
    ) {
      setIsError({ error: true, message: messages.error1 });
    } else if (
      username.length <= 4 &&
      username.length >= 64 &&
      username.startsWith("_")
    ) {
      setIsError({ error: true, message: messages.error2 });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setIsError({ error: true, message: messages.error3 });
    } else if (password.length <= 8 && password.length >= 32) {
      setIsError({ error: true, message: messages.error4 });
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
      setIsError({ error: true, message: messages.error4 });
    } else if (password !== repeatPassword) {
      setIsError({ error: true, message: messages.error5 });
    } else {
      axios({
        method: "post",
        url: "https://murphyteam.ir/user/signup",
        data: { email: email, password: password, username: username },
      })
        .then(({ data, status }) => {
          if (status === 201) {
            toast.success("کاربر با موفقیت ساخته شد.");
            reset();
          }
        })
        .catch((ex) => {
          toast.error("مشکلی پیش آمده");
          console.log("user2", ex);
        });
    }
  };

  // const { setFieldValue, handleSubmit, values, errors, touched } = useFormik({
  //   initialValues: { username: "", email: "", password: "", repassword: "" },
  //   enableReinitialize: true,
  //   validationSchema: schema,
  //   async onSubmit(
  //     data: {
  //       username: string;
  //       email: string;
  //       password: string;
  //       repassword: string;
  //     },
  //     { setSubmitting }: any
  //   ) {
  //     setIsError({ error: true, message: "فیلد ها را کامل کنید" });
  //   } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
  //     setIsError({ error: true, message: "لطفا ایمیل معتبری وارد کنید" });
  //   } else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(password)) {
  //     setIsError({ error: true, message: "رمز عبور شما مناسب نیست" });
  //   } else if (password !== repeatPassword) {
  //     setIsError({ error: true, message: "تکرار رمز عبور صحیح نمیباشد" });
  //   } else if (username.length <= 4 || !username.startsWith("_")) {
  //     setIsError({ error: true, message: "رمز عبور شما مناسب نیست" });
  //   } else {
  //     const user = {
  //       username: username,
  //       email: email,
  //       password: password,
  //     };

  //       await dispatch(
  //         registerThunk({
  //           username: data.username,
  //           email: data.email.toLowerCase(),
  //           password: data.password,
  //         })
  //       ).unwrap();
  //       dispatch(getCurrentUser());

  //       toast.success("با موفقیت وارد شدید");
  //       navigate("/myCollegeGrama");
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("مشکلی پیش آمده");
  //     } finally {
  //       setSubmitting(false);
  //     }
  //   },
  // });

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
          />
          {/* <span className="text-[#]">{username && messages.error2}</span> */}
        </div>
        <div className="mt-[32px]">
          <Input
            placeholder="ایمیل"
            imageSrc={gmail}
            imageAlt="gmail"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <span>
            {email && isError.message
              ? messages.error3
              : (isError.message = "")}
          </span>
        </div>
        <div className="mt-[32px]">
          <Input
            placeholder="رمز عبور"
            imageSrc={key}
            imageAlt="key"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            type="password"
          />
          <span>{password && messages.error4}</span>
        </div>
        <div className="mt-[32px]">
          <Input
            placeholder="تکرار رمز عبور"
            imageSrc={key}
            imageAlt="repeat key"
            value={repeatPassword}
            onChange={(e: any) => setRepeatPassword(e.target.value)}
            type="password"
          />
          <span>{repeatPassword && messages.error5}</span>
        </div>
        <div className="flex justify-end my-10">
          <Button title={"ثبت نام"} width="100px" type="submit" />
        </div>
        <span>{messages.error1}</span>
      </form>
    </div>
  );
};

export default Register;
