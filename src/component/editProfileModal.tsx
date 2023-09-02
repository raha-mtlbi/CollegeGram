import Textarea from "@material-tailwind/react/components/Textarea";
import { Dialog } from "@headlessui/react";
import Input from "./input";
import Button from "./button";

import { useState } from "react";
import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";
import camera from "../assets/icons/camera.svg";
import close from "../assets/icons/close.svg";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EditProfile = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [Name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [bio, setBio] = useState("");
  const [secret, setSecret] = useState(false);
  const [profile, setProfile] = useState("");

  axios({
    method: "patch",
    url: "https://murphyteam.ir/user/me",
    data: {
      email: email,
      password: password,
      bio: bio,
      lastName: lastName,
      name: Name,
      private: secret,
      profile: profile,
    },
  })
    .then(({ status }) => {
      if (status === 200) {
        toast.success("تغییرات با موفقیت انجام شد");
      }
    })
    .catch((ex) => {
      toast.error("مشکلی پیش آمده");
      console.log("user2", ex);
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
          <Dialog.Panel className="w-full  max-w-md transform overflow-hidden rounded-2xl bg-[#F3F0EE] p-6 text-left align-middle shadow-xl transition-all">
            <p className="text-center text-[20px] font-bold not-italic text-[#17494D] leading-normal my-2 ">
              ویرایش حساب
            </p>

            <div className="mt-2">
              <label htmlFor={"x"} className="flex justify-center p-2">
                <input
                  type="file"
                  id={"x"}
                  className="hidden"
                  onChange={(e: any) => setProfile(e.target.files[0])}
                />
                <div className="w-[90px] h-[90px] rounded-[50%] border-2 border-[#C19008] flex justify-center items-center ">
                  <img
                    alt="camera"
                    src={camera}
                    className="w-[36px] h-[36px] cursor-pointer"
                  />
                </div>
              </label>
              <p className="text-center">عکس پروفایل</p>
              {/* {image && (
                    <button className="flex justify-center mx-auto mb-7 mt-2  items-center">
                      <img
                        alt="close"
                        src={close}
                        className="w-[12px] h-[12px] mt-1"
                      />
                      <p className="text-[#C19008] mr-2 font-bold">حذف تصویر</p>
                    </button>
                  )} */}

              <div className="my-4">
                <Input
                  placeholder="ایمیل"
                  imageSrc={gmail}
                  imageAlt="gmail"
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-4">
                <Input
                  placeholder="نام"
                  imageSrc={person}
                  imageAlt="name"
                  onChange={(e: any) => setName(e.target.value)}
                />
              </div>
              <div className="my-4">
                <Input
                  placeholder="نام خانوادگی"
                  imageSrc={person}
                  imageAlt="lastName"
                  onChange={(e: any) => setLastName(e.target.value)}
                />
              </div>
              <div className="my-4">
                <Input
                  placeholder="رمز عبور"
                  imageSrc={key}
                  imageAlt="key"
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </div>
              <div className="my-4">
                <Input
                  placeholder="تکرار رمز عبور"
                  imageSrc={key}
                  imageAlt="repeat key"
                  onChange={(e: any) => setRepeatPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-start">
                <label className="relative inline-flex items-center cursor-pointer mb-6 mt-3">
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    پیچ خصوصی باشد
                  </span>
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={(e: any) => setSecret(e.target.value)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus: rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gray-800"></div>
                </label>
              </div>
              <div className="my-5">
                <Textarea
                  className="w-[311px] h-[88px] rounded-[10px] bg-[#F3F0EE] border border-[#17494d80] resize-none"
                  onChange={(e: any) => setBio(e.target.value)}
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
                onClick={() => {}}
              />
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default EditProfile;
