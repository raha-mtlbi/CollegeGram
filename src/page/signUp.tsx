import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import * as Yup from "yup";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";

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

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (
      username === "" ||
      email === "" ||
      password === "" ||
      repeatPassword === ""
    ) {
      setIsError({ error: true, message: "erroe 1" });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setIsError({ error: true, message: "erroe 2" });
    } else if (password.length < 6) {
      setIsError({ error: true, message: "erroe 3" });
    } else if (!/^[a-z]+/.test(password) && !/^[A-Z]+/.test(password)) {
      setIsError({ error: true, message: "erroe 4" });
    } else if (password !== repeatPassword) {
      setIsError({ error: true, message: "erroe 5" });
    } else {
      const user = {
        username: username,
        email: email,
        password: password,
      };

      axios({
        method: "post",
        url: "https://murphyteam.ir/user/signup",
        data: { user },
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
        </div>
        <div className="mt-[32px]">
          <Input
            placeholder="ایمیل"
            imageSrc={gmail}
            imageAlt="gmail"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-[32px]">
          <Input
            placeholder="رمز عبور"
            imageSrc={key}
            imageAlt="key"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-[32px]">
          <Input
            placeholder="تکرار رمز عبور"
            imageSrc={key}
            imageAlt="repeat key"
            value={repeatPassword}
            onChange={(e: any) => setRepeatPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-end my-10">
          <Button title={"ثبت نام"} width="100px" type="submit" />
        </div>
        <span>{isError.error && isError.message}</span>
      </form>
    </div>
  );
};

export default Register;
