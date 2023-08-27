import { Link, useNavigate } from "react-router-dom";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail.svg";
import key from "../assets/icons/key.svg";
import back from "../assets/icons/arrow-back.svg";
import { useFormik } from "formik";

const schema = "";

export default function LoginPage() {
  const navigate = useNavigate();

  const { handleBlur, values, errors, touched, handleSubmit } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: {},
    onSubmit: async () => {
      try {
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="flex column mt-6 justify-center text-center">
      <form onSubmit={handleSubmit}>
        <div className="flex my-3 text-center justify-center">
          <Link to="/login" className={"mx-2 text-gray-700"}>
            ورود به کالج گرام
          </Link>
          <span className="mx-4 text-gray-400 "> |</span>
          <Link className={" mx-2 text-gray-400 "} to={"/signup"}>
            ثبت نام در کالج گرام
          </Link>
        </div>
        <div className="mt-12 mb-8">
          <Input
            placeholder="ایمیل"
            imageSrc={gmail}
            imageAlt="gmail"
            className=""
          />
        </div>
        <Input
          placeholder="رمز عبور"
          imageSrc={key}
          imageAlt="key"
          className="mb-4"
        />
        <div className="flex items-center my-5 mr-2">
          <input
            type="checkbox"
            value=""
            className="w-4 h-4 text-[#587052] bg-gray-100 border-gray-300 rounded dark:bg-gray-700 "
          />
          <label className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-500">
            من را به خاطر بسپار
          </label>
        </div>
        <div className="flex justify-end my-3">
          <Button title={"ورود"} width="100px" onClick={() => {}} />
        </div>
        <button
          className="flex items-center mt-10 mb-2"
          onClick={() => navigate("/recoveryPassword")}
        >
          <img src={back} alt="back" className="mt-2 ml-2" />
          <p className="text-[#C19008]">رمز عبورم رو فراموش کردم</p>
        </button>
        <button
          className="flex items-start"
          onClick={() => navigate("/signup")}
        >
          <img src={back} alt="back" className="mt-2 ml-2" />
          <p className="text-[#C19008]">ثبت نام در کالج گرام </p>
        </button>
      </form>
    </div>
  );
}
