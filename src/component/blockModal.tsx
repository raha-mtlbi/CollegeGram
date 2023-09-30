import React from "react";
import { Dialog } from "@headlessui/react";
import Button from "./button";
import { IOtherUser } from "../api/type/otherUser";

import blockIcon from "../assets/icons/report.svg";
import tik from "../assets/icons/Verified.svg";
import person from "../assets/icons/person.svg";

const BlockModal = ({
  open,
  onClose,
  user,
  onClick,
}: {
  open: boolean;
  onClose: () => void;
  user: IOtherUser;
  onClick: () => void;
}) => {
  console.log("user", user);

  return (
    <Dialog as="div" open={open} onClose={onClose} style={{ direction: "rtl" }}>
      <div
        className="fixed inset-0 bg-black/30 overflow-y-auto"
        aria-hidden="true"
      />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center text-center ">
          <Dialog.Panel className=" transform overflow-hidden rounded-3xl bg-[#FFF] shadow-xl transition-all w-[375px] h-[439px] text-[#17494D]">
            <div className="items-center justify-center text-center">
              <img alt="iamge" src={blockIcon} className="mx-auto mt-[25px]" />
              <p className="text-[22px] font-normal mt-[3px]">بلاک</p>
            </div>

            <div className="flex">
              <div className="mr-[51px] text-right">
                <p className="text-[13px] font-bold mt-[50px]">
                  {user?.user?.username}
                </p>
                <p className="text-[11px] mt-[5px]">
                  {user?.user?.followers} دنبال‌کننده
                </p>
              </div>
              <div className="rounded-full w-[80px] bg-white h-[80px] mr-[116px] mt-[30px]">
                <img alt="user" src={user?.user?.photo || person} />
                <img alt="iamge" src={tik} className=" absolute -mt-5" />
              </div>
            </div>

            <div className="text-[14px] text-[#17494D] text-right mr-[51px] mt-[50px]">
              <p className="font-bold">
                مطمئنی میخوای {user?.user?.username} رو بلاک کنی؟
              </p>
              <p className="mt-[8px]">
                اگه بلاکش کنی دیگه نمیتونه بهت پیام بده و
              </p>
              <p className="mt-2">پست هات رو ببینه.قابلیت لایک کردن و کامنت</p>
              <p className="mt-2">گذاشتن زیر پست های توهم براش مسدود میشه.</p>
            </div>

            <div className="mt-7">
              <button
                onClick={onClose}
                className="w-[104px] ml-[8px] mr-[100px]"
              >
                نه پشیمونم
              </button>
              <Button
                title={"آره، حتما"}
                width="100px"
                type="submit"
                onClick={onClick}
              />
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default BlockModal;
