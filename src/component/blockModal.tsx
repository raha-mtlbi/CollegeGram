import React from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import Button from "./button";
import { useUser } from "../features/hooks";

import blockIcon from "../assets/icons/report.svg";
import profile from "../assets/icons/Ellipse.svg";
import tik from "../assets/icons/Verified.svg"

const BlockModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const user = useUser();
  const navigate = useNavigate();

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
                <p className="text-[13px] font-bold mt-[50px]">متین دهقان</p>
                <p className="text-[11px] mt-[5px]">170 هزار دنبال‌کننده</p>
              </div>
              <div className="rounded-full w-[80px] h-[80px] mr-[116px] mt-[30px]">
                <div className="relative w-[80px] h-[80px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    className="absolute w-[70px] h-[60px] text-center text-gray-400 -left-[-5px]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <img alt="iamge" src={tik} className=" absolute -mt-5" />
              </div>
            </div>

            <div className="text-[14px] text-[#17494D] text-right mr-[51px] mt-[50px]">
              <p className="font-bold">مطمئنی میخوای متین رو بلاک کنی؟</p>
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
                onClick={() => navigate(`/user/${user?.id}/block`)}
              />
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default BlockModal;
