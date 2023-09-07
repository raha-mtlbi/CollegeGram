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
import camera from "../assets/icons/camera.svg";
import close from "../assets/icons/close.svg";
import { imageUrl } from "../api/config";

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
    },
    enableReinitialize: true,
    // validationSchema: loginValidation,
    onSubmit: EditProfileSubmit({ onClose }),
  });

  const handleDelete =async () => {
    
  }

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
          <Dialog.Panel className="w-full  max-w-md transform overflow-hidden rounded-2xl bg-[#F3F0EE] p-6 text-left align-middle shadow-xl transition-all">
            <p className="text-center text-[20px] font-bold not-italic text-[#17494D] leading-normal my-2 ">
              ویرایش حساب
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="mt-2">
                <label htmlFor={"x"} className="flex justify-center p-2">
                  <input
                    type="file"
                    id={"x"}
                    className="hidden"
                    // value={formik.values.photo}
                    onChange={(e: any) =>
                      formik.setFieldValue("photo", e.target.files[0])
                    }
                  />
                  <div className="w-[90px] h-[90px] rounded-[50%] border-2 border-[#C19008] flex justify-center items-center ">
                    <img
                      alt="camera"
                      src={user ? imageUrl + user?.photo : camera}
                      className={
                        user
                          ? "w-[90px] h-[90px] rounded-[50%] object-fill"
                          : "w-[36px] h-[36px] cursor-pointer"
                      }
                    />
                  </div>
                </label>
                <p className="text-center">عکس پروفایل</p>
                {user?.photo && (
                  <button
                    className="flex justify-center mx-auto mb-7 mt-2  items-center"
                    onClick={() => handleDelete()}
                  >
                    <img
                      alt="close"
                      src={close}
                      className="w-[12px] h-[12px] mt-1"
                    />
                    <p className="text-[#C19008] mr-2 font-bold">حذف تصویر</p>
                  </button>
                )}

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
                      // type="checkbox"
                      // checked={user ? user?.private : (formik.values.private)}
                      value={formik.values.private as unknown as string}
                      className="sr-only peer"
                      onChange={(e: any) =>
                        formik.setFieldValue("private", e.target.value)
                      }
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus: rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gray-800"></div>
                  </label>
                </div>
                <div className="my-5">
                  <Textarea
                    value={formik.values.bio}
                    className="w-[311px] h-[88px] rounded-[10px] bg-[#F3F0EE] border border-[#17494d80] resize-none"
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
