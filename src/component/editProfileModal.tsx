import React from "react";
import Textarea from "@material-tailwind/react/components/Textarea";
import { Dialog } from "@headlessui/react";

import { useFormik } from "formik";
import EditProfileSubmit from "../logic/editProfileSubmit";
import { useUser } from "../features/hooks";
import Input from "./input";
import Button from "./button";

import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";
import Avatar from "./EditAvatar";

const EditProfile = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const user = useUser();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
      name: "",
      lastname: "",
      bio: "",
      private: false,
      photo: undefined,
    },
    enableReinitialize: true,
    // validationSchema: loginValidation,
    onSubmit: EditProfileSubmit({ onClose }),
  });

  return (
    <Dialog
      as="div"
      open={open}
      onClose={onClose}
      className="flex justify-center items-center relative z-10 "
      style={{ direction: "rtl" }}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center ">
          <Dialog.Panel className="  max-w-md transform overflow-hidden rounded-2xl bg-[#F3F0EE] p-6 text-left align-middle shadow-xl transition-all">
            <p className="text-center text-[20px] font-bold not-italic text-[#17494D] leading-normal my-2 ">
              ویرایش حساب
            </p>

            <form onSubmit={formik.handleSubmit}>
              <Avatar
                // value={formik.values.photo}
                onChange={(e: any) =>
                  formik.setFieldValue("photo", e.target.value)
                }
              />
              <div className="mt-2">
                <div className="my-4">
                  <Input
                    placeholder={user ? user?.email : "ایمیل"}
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
                    placeholder={user && user?.name ? user?.name : "نام"}
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
                    placeholder={
                      user && user?.lastname ? user?.lastname : "نام خانوادگی"
                    }
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
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus: rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gray-800"></div>
                  </label>
                </div>
                <div className=" my-4">
                  <p className="mb-3 flex text-start">بایو</p>
                  <Textarea
                    placeholder={user ? user?.bio : ""}
                    value={formik.values.bio}
                    className="h-[88px] p-2 rounded-[10px] bg-[#F3F0EE] border border-[#17494d80] resize-none"
                    onChange={(e: any) =>
                      formik.setFieldValue("bio", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button className="mx-6" onClick={onClose}>
                  پشیمون شدم
                </button>
                <Button
                  title={"ثبت تغییرات"}
                  width={"110px"}
                  type="submit"
                  onClick={() => console.log("12")}
                />
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default EditProfile;
