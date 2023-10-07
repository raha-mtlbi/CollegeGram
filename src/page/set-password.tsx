import React from "react"
import { useParams } from "react-router-dom"
import { useFormik } from "formik"
import SetPassword from "../logic/setPassword"
import { setPasswordValidation } from "../utils/validations"

import Button from "../component/button"
import Input from "../component/input"

import key from "../assets/icons/key1.svg"

const ForgetPassword = () => {
  const queryString = window.location.search

  const queryParams = new URLSearchParams(queryString)

  const token = queryParams.get("token")

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      repassword: "",
      token: token,
    },
    enableReinitialize: true,
    validationSchema: setPasswordValidation,
    onSubmit: SetPassword({ token: token as string }),
  })

  return (
    <div className="min-h-[350px]">
      <p className="text-[2B2B2B] text-[16px] not-italic font-normal text-center justify-center">
        تنظیم رمز عبور جدید
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-[49px]">
          <Input
            type="password"
            placeholder="رمز عبور"
            postfix={<img src={key} alt="key" className="absolute mt-3 px-2" />}
            value={formik.values.newPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("newPassword", e.target.value)
            }
            onBlur={formik.handleBlur}
            error={Boolean(
              formik.errors?.newPassword && formik.touched?.newPassword
            )}
            errorText={formik.touched.newPassword && formik.errors?.newPassword}
          />
        </div>
        <div className="w-[320px] mt-[32px]">
          <Input
            type="password"
            placeholder="تکرار رمز عبور"
            postfix={<img src={key} alt="key" className="absolute mt-3 px-2" />}
            value={formik.values.repassword}
            onChange={(e: any) =>
              formik.setFieldValue("repassword", e.target.value)
            }
            onBlur={formik.handleBlur}
            error={Boolean(
              formik.errors?.repassword && formik.touched?.repassword
            )}
            errorText={formik.touched.repassword && formik.errors?.repassword}
          />
        </div>
        <div className="flex justify-end my-10">
          <Button title={"ثبت رمز عبور جدید"} type="submit" />
        </div>
      </form>
    </div>
  )
}

export default ForgetPassword
