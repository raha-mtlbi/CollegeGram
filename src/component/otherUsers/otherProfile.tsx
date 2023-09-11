import React, { useState } from "react";
import { imageUrl } from "../../api/config";
import { IUser } from "../../api/type/user";
import Button from "../button";
import BlockModal from "../blockModal";

import arrow from "../../assets/icons/arrow-down.svg";
import pin from "../../assets/icons/angled-pinG.svg";
import block from "../../assets/icons/report.svg";
import comment from "../../assets/icons/speech.svg";
import star from "../../assets/icons/sparkle.svg";
import verify from "../../assets/icons/Verified.svg";

const OtherProfile = ({ user }: { user?: IUser }) => {
  const [openBlockModal, setOpenBlockModal] = useState(false);

  return (
    <div>
      <BlockModal
        open={openBlockModal}
        onClose={() => setOpenBlockModal(false)}
      />

      <div className="w-[350px] h-[473px] bg-[#F1EBE3] border-[#CDCDCD] border flex flex-col justify-center items-center text-center">
        <div className="relative top-[-70px] flex flex-col items-center">
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
          <div className=" absolute top-[100px] left-[105px]">
            <img alt="verify" src={verify} />
          </div>
          <p className="flex text-[#C19008] text-[14px] not-italic mt-[15px] justify-center">
            {user?.username && (
              <img src={arrow} className="my-auto mx-[10px]" alt="arrow" />
            )}
            {user?.username}
          </p>
          <p className="text-[#C38F00] text-center text-[20px] font-bold  mt-1">
            {"متین"}
          </p>
          <div className="flex justify-center mt-3 mb-5 text-[14px]">
            <p className="text-[#17494D] ml-1">{user?.followers}</p>
            <p className="text-[#17494D] ml-[10px]">دنبال‌کننده </p>
            <p>|</p>
            <p className="text-[#17494D] mr-2">{user?.following}</p>
            <p className="text-[#17494D] mr-1"> دنبال‌شونده</p>
          </div>
          <Button title={"دنبال کردن"} width={"100px"} disabled={user?.block} />
          <div className="flex flex-col items-center my-7">
            <img alt="pin" src={pin} />
            <div className="flex items-center my-3">
              <p className="text-[#17494D] text-xs">87</p>
              <p className="text-[#17494D] mx-1 text-xs">عکس</p>
            </div>
          </div>
          <div className=" bg-[#F3F0EE] p-5 grid grid-cols-3 gap-3 border  border-zinc-300">
            <button
              disabled={user?.block}
              className={
                user?.block ? "w-5 h-5 mx-2 invert-[0.5]" : "w-5 h-5 mx-2"
              }
            >
              <img className="" alt="satr" src={star} />
            </button>
            <button
              disabled={user?.block}
              className={
                user?.block ? "w-5 h-5 mx-2 invert-[0.5]" : "w-5 h-5 mx-2"
              }
            >
              <img className="" alt="comment" src={comment} />
            </button>
            <button
              disabled={user?.block}
              className={user?.block ? " invert-[0.5]" : "w-5 h-5 mx-2"}
              onClick={() => setOpenBlockModal(true)}
            >
              <img className="" alt="block" src={block} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProfile;
