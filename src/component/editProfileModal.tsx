import React, { useState } from "react";

import { useFormik } from "formik";
import EditProfileSubmit from "../logic/editProfileSubmit";
import { useUser } from "../features/hooks";
import LoadingPage from "../page/loading";
import { useMediaQuery } from "@uidotdev/usehooks";
import Input from "./input";
import Button from "./button";
import Avatar from "./EditAvatar";
import MyModal from "./Modal";

import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";

const EditProfile = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const user = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const phone = useMediaQuery("only screen and (max-width : 600px)");

  const formik = useFormik({
    initialValues: {
      email: user?.email || "",
      password: "",
      repeatPassword: "",
      name: user?.name || "",
      lastname: user?.lastname || "",
      bio: user?.bio || "",
      private: user?.private as boolean,
      photo: user?.photo?.[0] || undefined,
    },
    enableReinitialize: true,
    // validationSchema: loginValidation,
    onSubmit: EditProfileSubmit({ onClose, setLoading }),
  });

  return (
    <MyModal open={open} onClose={onClose}>
      <p className="text-center text-[20px] font-bold not-italic text-[#17494D] leading-normal my-2 ">
        ویرایش حساب
      </p>

      <form
        onSubmit={formik.handleSubmit}
        style={{ width: phone ? "100%" : "350px" }}
      >
        <Avatar onChange={(f: any) => formik.setFieldValue("photo", f)} />

        <div className="mt-2">
          <div className="my-4">
            <Input
              type="email"
              placeholder={"ایمیل"}
              imageSrc={gmail}
              imageAlt="gmail"
              value={formik.values.email}
              onChange={(e: any) =>
                formik.setFieldValue("email", e.target.value)
              }
            />
          </div>
          <div className="my-4">
            <Input
              placeholder={"نام"}
              imageSrc={person}
              imageAlt="name"
              value={formik.values.name}
              onChange={(e: any) =>
                formik.setFieldValue("name", e.target.value)
              }
            />
          </div>
          <div className="my-4">
            <Input
              type="text"
              placeholder={"نام خانوادگی"}
              imageSrc={person}
              imageAlt="lastName"
              value={formik.values.lastname}
              onChange={(e: any) =>
                formik.setFieldValue("lastname", e.target.value)
              }
            />
          </div>
          <div className="my-4">
            <Input
              type="password"
              placeholder="رمز عبور"
              imageSrc={key}
              imageAlt="key"
              value={formik.values.password}
              onChange={(e: any) =>
                formik.setFieldValue("password", e.target.value)
              }
            />
          </div>
          <div className="my-4">
            <Input
              type="password"
              placeholder="تکرار رمز عبور"
              imageSrc={key}
              imageAlt="repeat key"
              value={formik.values.repeatPassword}
              onChange={(e: any) =>
                formik.setFieldValue("repeatPassword", e.target.value)
              }
            />
          </div>
          <div className="flex justify-start">
            <label className="relative inline-flex items-center cursor-pointer mb-6 mt-3">
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                پیچ خصوصی باشد
              </span>
              <input
                type="checkbox"
                className="sr-only peer"
                {...formik.getFieldProps("private")}
                checked={formik.values.private}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus: rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gray-800"></div>
            </label>
          </div>
          <div className=" my-4">
            <p className="mb-3 flex text-start">بایو</p>
            <textarea
              style={{ width: "100%" }}
              className=" p-2 rounded-[10px] bg-[#F3F0EE] border border-[#17494d80] resize-none"
              {...formik.getFieldProps("bio")}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="mx-6" onClick={onClose}>
            پشیمون شدم
          </button>
          {loading ? (
            <LoadingPage />
          ) : (
            <Button title={"ثبت تغییرات"} type="submit" />
          )}
        </div>
      </form>
    </MyModal>
  );
};
export default EditProfile;
