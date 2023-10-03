import React, { useState } from "react";
import Button from "./button";
import { IOtherUser } from "../api/type/otherUser";
import { blockUser } from "../api/otherUser";
import { toast } from "react-toastify";
import MyModal from "./Modal";

import blockIcon from "../assets/icons/report.svg";
import tik from "../assets/icons/Verified.svg";
import person from "../assets/icons/person.svg";
import LoadingPage from "../page/loading";

const BlockModal = ({
  open,
  onClose,
  user,
  onClick,
}: {
  open: boolean;
  onClose: () => void;
  user: IOtherUser;
  onClick?: () => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleBlock = async () => {
    try {
      setLoading(true);

      const response = await blockUser(user?.user?.id as number);
      // const newData = await get(`/post/${id}`);
      // setPhotoDetail(newData);
      toast.success(response.msg);
      onClose();
      setLoading(false);
    } catch (error) {
      console.log(error);
      onClose();
      setLoading(false);
    }
  };
  return (
    <MyModal open={open} onClose={onClose}>
      <div className=" items-center justify-center text-center">
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
          <div className="relative w-[80px] h-[80px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <img
              alt="user"
              src={user?.user?.photo || person}
              className="h-full"
            />
          </div>
          <img alt="iamge" src={tik} className=" absolute -mt-5" />
        </div>
      </div>

      <div className="text-[14px] text-[#17494D] text-right mr-[51px] mt-[50px]">
        <p className="font-bold">
          مطمئنی میخوای {user?.user?.username} رو بلاک کنی؟
        </p>
        <p className="mt-[8px]">اگه بلاکش کنی دیگه نمیتونه بهت پیام بده و</p>
        <p className="mt-2">پست هات رو ببینه.قابلیت لایک کردن و کامنت</p>
        <p className="mt-2">گذاشتن زیر پست های توهم براش مسدود میشه.</p>
      </div>

      <div className="mt-7">
        <button onClick={onClose} className="w-[104px] ml-[8px] mr-[100px]">
          نه پشیمونم
        </button>
        {loading ? (
          <LoadingPage />
        ) : (
          <Button
            title={"آره، حتما"}
            type="submit"
            onClick={() => handleBlock()}
          />
        )}
      </div>
    </MyModal>
  );
};

export default BlockModal;
