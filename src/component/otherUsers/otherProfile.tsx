import React from "react";
import { imageUrl } from "../../api/config";
import { IUser } from "../../api/type/user";
import Button from "../button";

import arrow from "../../assets/icons/arrow-down.svg";
import pin from "../../assets/icons/angled-pin.svg";
import block from "../../assets/icons/report.svg";
import comment from "../../assets/icons/speech.svg";
import star from "../../assets/icons/sparkle.svg";

const OtherProfile = ({ user }: { user?: IUser }) => {
  return (
    <div>
      <div className="w-[350px] h-[473px] bg-[#F1EBE3] border-[#CDCDCD] border flex flex-col justify-center items-center text-center">
        <div className="relative w-[120px] h-[120px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          {user?.photo ? (
            <img
              alt="profile"
              src={imageUrl + user?.photo}
              className=" w-full h-[85%]"
            />
          ) : (
            <svg
              className="absolute w-[110px] h-[100px] text-center text-gray-400 -left-[-5px]"
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
          )}
        </div>
        <p className="flex text-[#C19008] text-[14px] not-italic mt-[15px] justify-center">
          {user?.username && (
            <img src={arrow} className="my-auto mx-[10px]" alt="arrow" />
          )}
          {user?.username}
        </p>
        <p className="text-[#17494D] text-center text-[20px] font-bold  mt-1">
          {"متین "}
        </p>
        <div className="flex justify-center mt-[16px] text-[14px]">
          <p className="ml-1">{user?.followers}</p>
          <p className="ml-[10px]">دنبال‌کننده </p>
          <p>|</p>
          <p className="mr-2">{user?.following}</p>
          <p className="mr-1"> دنبال‌شونده</p>
        </div>
        <Button title={"دنبال کردن"} width={"100px"} />
        <div>
          <img alt="pin" src={pin} />
          {/* <p>{imageCount}</p> */}
          <p>عکس</p>
        </div>
        <div className="grid grid-cols-3">
          <img alt="block" src={block} />
          <img alt="comment" src={comment} />
          <img alt="satr" src={star} />
        </div>
      </div>
    </div>
  );
};

export default OtherProfile;
