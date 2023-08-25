import Textarea from "@material-tailwind/react/components/Textarea";
import { Dialog } from "@headlessui/react";
import Input from "./input";
import Button from "./button";

import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";
import camera from "../assets/icons/camera.svg";

const EditProfile = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="flex justify-center items-center "
      style={{ direction: "rtl" }}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="bg-[#F3F0EE] rounded-[24px] absolute top-[50px] bottom-[50px] overflow-y-auto p-5">
        <p className="text-center text-[20px] font-bold not-italic text-[#17494D] leading-normal my-2 ">
          ویرایش حساب
        </p>
        <label htmlFor={"x"} className="flex justify-center p-2">
          <input type="file" id={"x"} className="hidden" />
          <div className="w-[90px] h-[90px] rounded-lg border-2 border-[#C19008] flex justify-center items-center ">
            <img alt="camera" src={camera} className="w-[36px] h-[36px]" />
          </div>
        </label>
        <div className="my-4">
          <Input placeholder="ایمیل" imageSrc={gmail} imageAlt="gmail" />
        </div>
        <div className="my-4">
          <Input placeholder="نام" imageSrc={person} imageAlt="name" />
        </div>
        <div className="my-4">
          <Input
            placeholder="نام خانوادگی"
            imageSrc={person}
            imageAlt="lastName"
          />
        </div>
        <div className="my-4">
          <Input placeholder="رمز عبور" imageSrc={key} imageAlt="key" />
        </div>
        <div className="my-4">
          <Input
            placeholder="تکرار رمز عبور"
            imageSrc={key}
            imageAlt="repeat key"
          />
        </div>
        <label className="relative inline-flex items-center cursor-pointer mb-6 mt-3" >
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            پیچ خصوصی باشد
          </span>
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus: rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gray-800"></div>
        </label>
        <div className="my-5">
          <Textarea className="w-[311px] h-[88px] rounded-[10px] bg-[#F3F0EE]	border border-[#17494d80] resize-none" />
        </div>

        <div className="flex justify-end">
          <button className="mx-6" onClick={onClose}>
            پشیمون شدم
          </button>
          <Button title={"ثبت تغییرات"} width={"110px"} onClick={() => {}} />
        </div>
      </div>
    </Dialog>
  );
};

export default EditProfile;
