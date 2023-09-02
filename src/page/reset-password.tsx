import { useFormik } from "formik";
import SetPassword from "../logic/setPassword";
import { setPasswordValidation } from "../utils/validations";

import Button from "../component/button";
import Input from "../component/input";

import key from "../assets/icons/key1.svg";
import { useParams } from "react-router-dom";

const ForgetPassword = () => {
  const { token } = useParams();
  console.log(token)

  const formik = useFormik({
    initialValues: { newPassword: "", token: "" },
    enableReinitialize: true,
    validationSchema: setPasswordValidation,
    onSubmit: SetPassword({ token: token as string }),
  });

  return (
    <div>
      <p className="text-[2B2B2B] text-[16px] not-italic font-normal text-center justify-center">
        تنظیم رمز عبور جدید
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-[49px]">
          <Input
            placeholder="رمز عبور"
            imageSrc={key}
            imageAlt="key"
            value={formik.values.newPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("newPassword", e.target.value)
            }
          />
        </div>
        <div className="mt-[32px]">
          <Input
            placeholder="تکرار رمز عبور"
            imageSrc={key}
            imageAlt="repeat key"
            value={formik.values.token}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("token", e.target.value)
            }
          />
        </div>
        <div className="flex justify-end my-10">
          <Button title={"ثبت رمز عبور جدید"} width="139px" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
