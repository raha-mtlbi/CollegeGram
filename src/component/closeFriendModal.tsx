import React from "react";
import { Dialog } from "@headlessui/react";
import Button from "./button";
import { IOtherUser } from "../api/type/otherUser";

import closeFriendIcon from "../assets/icons/sparkle1.svg";
import tik from "../assets/icons/Verified.svg";

const BestFriendModal = ({
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
  return (
    <Dialog as="div" open={open} onClose={onClose} style={{ direction: "rtl" }}>
      <div
        className="fixed inset-0 bg-black/30 overflow-y-auto"
        aria-hidden="true"
      />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center text-center ">
          <Dialog.Panel className=" transform overflow-hidden rounded-3xl bg-[#FFF] shadow-xl transition-all w-[375px] h-[439px] text-[#17494D]">
            <div className="flex items-center justify-center text-center mt-2">
              <img alt="iamge" src={closeFriendIcon} className=" mt-[25px]" />
              <p className="text-[22px] font-normal mr-3 mt-6">دوست نزدیک</p>
            </div>

            <div className="flex">
              <div className="mr-[51px] text-right">
                <p className="text-[13px] font-bold mt-[50px]">
                  {user !== undefined
                    ? user?.user?.name + " " + user?.user?.lastname
                    : "No_name"}
                </p>
                <p className="text-[11px] mt-[5px]">
                  {user?.user?.followers} دنبال‌کننده
                </p>
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
              <p className="font-bold">
                مطمئنی می‌خوای {user?.user?.name}رو به دوستان نزدیکت
              </p>
              <p className="font-bold mt-2">اضافه کنی؟</p>
              <p className="mt-[8px]">
                در این صورت اون می‌تونه محتواهایی که برای
              </p>
              <p className="mt-2">دوستان نزدیکت به اشتراک گذاشتی رو ببینه.</p>
            </div>

            <div className="mt-10">
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

export default BestFriendModal;
