import { Link, useLocation } from "react-router-dom";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail.svg";
import key from "../assets/icons/key.svg";

export default function LoginPage() {
  const location = useLocation();

  return (
    <div className="flex column mt-6 justify-center ">
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
        <div className="mt-12 mb-8">
          <Input placeholder="ایمیل" imageSrc={gmail} imageAlt="gmail" className="" />
        </div>
        <Input placeholder="رمز عبور" imageSrc={key} imageAlt="key" className="mb-4" />
        <Button title={"ورود"} width="100px" />
      </form>
    </div>
  );
}
