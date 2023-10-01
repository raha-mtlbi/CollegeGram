import React, { useState } from "react";
import { toast } from "react-toastify";
import { CloseFriendUser } from "../api/otherUser";
import { IOtherUser } from "../api/type/otherUser";
import Button from "./button";
import MyModal from "./Modal";
import LoadingPage from "../page/loading";

import closeFriendIcon from "../assets/icons/sparkle1.svg";
import tik from "../assets/icons/Verified.svg";
import person from "../assets/icons/person.svg";

const BestFriendModal = ({
  open,
  onClose,
  user,
}: {
  open: boolean;
  onClose: () => void;
  user: IOtherUser;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCloseFriend = async () => {
    try {
      setLoading(true);
      const response = await CloseFriendUser(user?.user?.id as number);
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
      <div className="flex items-center justify-center text-center mt-2 ">
        <img alt="iamge" src={closeFriendIcon} className=" mt-[25px]" />
        <p className="text-[22px] font-normal mr-3 mt-6">دوست نزدیک</p>
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
        <div className="rounded-full w-[80px] h-[80px] mr-[116px] mt-[30px]">
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
          مطمئنی می‌خوای {user?.user?.username} رو به دوستان نزدیکت
        </p>
        <p className="font-bold mt-2">اضافه کنی؟</p>
        <p className="mt-[8px]">در این صورت اون می‌تونه محتواهایی که برای</p>
        <p className="mt-2">دوستان نزدیکت به اشتراک گذاشتی رو ببینه.</p>
      </div>
      <div className="mt-10">
        <button onClick={onClose} className="w-[104px] ml-[8px] mr-[100px]">
          نه پشیمونم
        </button>
        {loading ? (
          <LoadingPage />
        ) : (
          <Button
            title={"آره، حتما"}
            type="submit"
            onClick={() => handleCloseFriend()}
          />
        )}
      </div>
    </MyModal>
  );
};

export default BestFriendModal;
