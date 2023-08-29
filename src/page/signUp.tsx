import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reset = () => {
    setFullname("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const user = {
      fullname,
      email,
      password,
    };

    axios
      .post("https://user/signup", JSON.stringify(user), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(({ data, status }) => {
        if (status === 201) {
          toast.success("کاربر با موفقیت ساخته شد.");
          reset();
        }
      })
      .catch((ex) => {
        console.log(ex);
        toast.error("مشکلی پیش آمده");
      });
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
            value={fullname}
            onChange={(e: any) => setFullname(e.target.value)}
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
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
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
