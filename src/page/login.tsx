import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginThunk } from "../features/userSlice";
import { useAppDispatch } from "../store";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail.svg";
import key from "../assets/icons/key.svg";
import back from "../assets/icons/arrow-back.svg";

const schema = Yup.object().shape({
  usernameOrEmail: Yup.string().required("Please enter your email").email(),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { setFieldValue, handleSubmit, values, errors } = useFormik({
    initialValues: { usernameOrEmail: "", password: "" },
    enableReinitialize: true,
    validationSchema: schema,
    async onSubmit(
      data: { usernameOrEmail: string; password: string },
      { setSubmitting }: any
    ) {
      try {
        setSubmitting(true);

        await dispatch(
          loginThunk({
            usernameOrEmail: data.usernameOrEmail.toLowerCase(),
            password: data.password,
          })
        ).unwrap();
        toast.success("کاربر با موفقیت ساخته شد.");
        navigate("/myCollegeGrama");
      } catch (error) {
        console.log(error);
        toast.error("مشکلی پیش آمده");
      } finally {
        setSubmitting(false);
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
            value={values.usernameOrEmail}
            onChange={(e: any) =>
              setFieldValue("usernameOrEmail", e.target.value)
            }
            type="email"
            error
          />
        </div>
        <Input
          placeholder="رمز عبور"
          imageSrc={key}
          imageAlt="key"
          value={values.password}
          onChange={(e: any) => setFieldValue("password", e.target.value)}
          type="password"
        />
        <div className="flex items-center my-5 mr-2">
          <input
            type="checkbox"
            className="w-4 h-4 text-[#587052] bg-gray-100 border-gray-300 rounded dark:bg-gray-700 "
          />
          <label className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-500">
            من را به خاطر بسپار
          </label>
        </div>
        <div className="flex justify-end my-3">
          <Button type="submit" title={"ورود"} width="100px" />
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
