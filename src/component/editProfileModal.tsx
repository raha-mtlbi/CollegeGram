import React from "react";
import Input from "./input";
import gmail from "../assets/icons/gmail1.svg";
import key from "../assets/icons/key1.svg";
import person from "../assets/icons/person.svg";
import Textarea from "@material-tailwind/react/components/Textarea";

import { Dialog } from "@headlessui/react";

const EditProfile = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="w-[375px] h-auto bg-[#ded3cc] rounded-[24px] fixed inset-0 ">
        <p className="text-center text-[20px] font-bold not-italic text-[#17494D] leading-normal">
          ویرایش حساب
        </p>
        <Input
          placeholder="ایمیل"
          imageSrc={gmail}
          imageAlt="gmail"
          className=""
        />
        <Input
          placeholder="نام"
          imageSrc={person}
          imageAlt="name"
          className=""
        />
        <Input
          placeholder="نام خانوادگی"
          imageSrc={person}
          imageAlt="lastName"
          className=""
        />
        <Input
          placeholder="رمز عبور"
          imageSrc={key}
          imageAlt="key"
          className=""
        />
        <Input
          placeholder="تکرار رمز عبور"
          imageSrc={key}
          imageAlt="repeat key"
          className=""
        />
        <div>
          <Textarea className="w-[311px] h-[88px] rounded-[10px] bg-[#F3F0EE]	border border-[#17494d80] resize-none" />
        </div>
      </div>
    </Dialog>
  );
};

export default EditProfile;
