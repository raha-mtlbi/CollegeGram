import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { recoveryPassword } from "../api/user";

import Button from "../component/button";
import Input from "../component/input";

import gmail from "../assets/icons/gmail.svg";

const schema = Yup.object().shape({
  usernameOrEmail: Yup.string().required("لطفا ایمیل خود را وارد کنید").email(),
});
export default function RecoveryPassword() {
  const navigate = useNavigate();

  const { setFieldValue, handleSubmit, values, errors } = useFormik({
    initialValues: { email: "" },
    enableReinitialize: true,
    validationSchema: schema,
    async onSubmit(data: { email: string }, { setSubmitting }: any) {
      try {
        setSubmitting(true);

        await recoveryPassword({ email: data?.email });
        toast.success("با موفقیت وارد شدید");
        navigate("/setPassword");
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
        <p className={"mx-2 text-gray-700"}>بازیابی رمز عبور </p>

        <div className="mt-12 mb-8">
          <Input
            placeholder="ایمیل"
            imageSrc={gmail}
            imageAlt="gmail"
            value={values?.email}
            onChange={(e: any) => setFieldValue("email", e.target.value)}
            error={Boolean(errors.email)}
            errorText="لطفا ایمیل معتبری وارد کنید"
          />
        </div>

        <div className="flex items-center justify-end my-3">
          <button className="ml-10" onClick={() => navigate("/login")}>
            انصراف
          </button>
          <Button
            title={"ارسال لینک بازیابی رمز عبور"}
            width="200px"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
