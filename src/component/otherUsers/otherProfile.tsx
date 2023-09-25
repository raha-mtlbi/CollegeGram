import React, { useState } from "react";
import { imageUrl } from "../../api/config";
import { IOtherUser } from "../../api/type/otherUser";
import Button from "../button";
import BlockModal from "../blockModal";
import {
  handleBlock,
  handleFollow,
  handleUnFollow,
} from "../../logic/followUser";

import arrow from "../../assets/icons/arrow-down.svg";
import pin from "../../assets/icons/angled-pinG.svg";
import block from "../../assets/icons/report.svg";
import comment from "../../assets/icons/speech.svg";
import star from "../../assets/icons/sparkle.svg";
import verify from "../../assets/icons/Verified.svg";
import userIcon from "../../assets/icons/person.svg";

const OtherProfile = ({ user }: { user?: IOtherUser }) => {
  const [openBlockModal, setOpenBlockModal] = useState(false);
  const [follows, setFollows] = useState<boolean>(false);
  const [blocks, setBlocks] = useState(false);

  console.log("u", user);
  return (
    <div>
      <BlockModal
        open={openBlockModal}
        onClose={() => setOpenBlockModal(false)}
        user={user as IOtherUser}
        onClick={() => {
          handleBlock(user?.user?.id as number, setBlocks);
          setOpenBlockModal(false);
        }}
      />

      <div className="w-[350px] h-[473px] bg-[#F1EBE3] border-[#CDCDCD] border flex flex-col justify-center items-center text-center">
        <div className="relative top-[-70px] flex flex-col items-center">
          <div className="relative w-[120px] h-[120px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <img
              alt="profile"
              src={user?.user?.photo ? imageUrl + user?.user?.photo : userIcon}
              className=" w-full h-[85%]"
            />
          </div>
          <div className=" absolute top-[100px] left-[105px]">
            <img alt="verify" src={verify} />
          </div>
          <p className="flex text-[#C19008] text-[14px] not-italic mt-[15px] justify-center">
            {user?.user?.username && (
              <img src={arrow} className="my-auto mx-[10px]" alt="arrow" />
            )}
            {user?.user?.username}
          </p>
          <p className="text-[#C38F00] text-center text-[20px] font-bold  mt-1">
            {user !== undefined
              ? user?.user?.name + " " + user?.user?.lastname
              : "No_Name"}
          </p>
          <div className="flex justify-center mt-3 mb-5 text-[14px]">
            <p className="text-[#17494D] ml-1">{user?.user?.followers || 0}</p>
            <p className="text-[#17494D] ml-[10px]">دنبال‌کننده </p>
            <p>|</p>
            <p className="text-[#17494D] mr-2">{user?.user?.following || 0}</p>
            <p className="text-[#17494D] mr-1"> دنبال‌شونده</p>
          </div>
          {!user?.user?.private && follows ? (
            <button
              className=" bg-white border border-[#C38F00] rounded-3xl px-4 py-2 text-[#C38F00]"
              disabled={blocks}
              onClick={() =>
                handleUnFollow(user?.user?.id as number, setFollows)
              }
            >
              دنبال شده
            </button>
          ) : user?.user?.private && follows ? (
            <Button
              title={" لغو درخواست "}
              width={"100px"}
              disabled={blocks}
              onClick={() => handleUnFollow(user?.user?.id, setFollows)}
            />
          ) : (
            <Button
              title={"دنبال کردن"}
              width={"100px"}
              disabled={blocks}
              onClick={() => handleFollow(user?.user?.id as number, setFollows)}
            />
          )}
          <div className="flex flex-col items-center my-7">
            <img alt="pin" src={pin} />
            <div className="flex items-center my-3">
              <p className="text-[#17494D] text-xs">{user?.user?.postsCount}</p>
              <p className="text-[#17494D] mx-1 text-xs">عکس</p>
            </div>
          </div>
          <div className=" bg-[#F3F0EE] p-5 grid grid-cols-3 gap-3 border  border-zinc-300">
            <button
              disabled={blocks}
              className={blocks ? "w-5 h-5 mx-2 invert-[0.5]" : "w-5 h-5 mx-2"}
            >
              <img className="" alt="satr" src={star} />
            </button>
            <button
              disabled={blocks}
              className={blocks ? "w-5 h-5 mx-2 invert-[0.5]" : "w-5 h-5 mx-2"}
            >
              <img className="" alt="comment" src={comment} />
            </button>
            <button
              disabled={blocks}
              className={blocks ? " invert-[0.5]" : "w-5 h-5 mx-2"}
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
