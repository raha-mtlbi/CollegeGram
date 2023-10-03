import React, { useEffect, useState } from "react";
import { Tooltip } from "@material-tailwind/react";
import CloseFriendModal from "../closeFriendModal";

import { IOtherUser } from "../../api/type/otherUser";
import Button from "../button";
import BlockModal from "../blockModal";
import { get } from "../../api";
import { toast } from "react-toastify";
import { blockUser, follow, unFollow } from "../../api/otherUser";

import pin from "../../assets/icons/angled-pinG.svg";
import block from "../../assets/icons/report.svg";
import comment from "../../assets/icons/speech.svg";
import star from "../../assets/icons/sparkle.svg";
import verify from "../../assets/icons/Verified.svg";
import userIcon from "../../assets/icons/person.svg";

const OtherProfile = ({ user, id }: { user?: IOtherUser; id: any }) => {
  const [openBlockModal, setOpenBlockModal] = useState(false);
  const [openCloseFriendModal, setOpenCloseFriendModal] = useState(false);
  const [userList, setUserList] = useState<IOtherUser>();

  useEffect(() => {
    get(`/user/${id}/profile`)
      .then((d: any) => setUserList(d))
      .catch((e) => console.log(e));
  }, [id]);

  const handleFollow = async (id: number) => {
    try {
      const response = await follow(id as number);
      const newUser = await get(`/user/${id}/profile`);
      setUserList(newUser);

      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnFollow = async (id: number) => {
    try {
      const response = await unFollow(id as number);
      const newUser = await get(`/user/${id}/profile`);
      setUserList(newUser);

      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlock = async (id: number) => {
    try {
      const response = await blockUser(id as number);
      const newUser = await get(`/user/${id}/profile`);
      setUserList(newUser);
      setOpenBlockModal(false);
      toast(response.msg);
    } catch (error) {
      console.log(error);
      setOpenBlockModal(false);
    }
  };

  return (
    <div>
      <BlockModal
        open={openBlockModal}
        onClose={() => setOpenBlockModal(false)}
        user={userList as IOtherUser}
        onClick={() => {
          handleBlock(userList?.user?.id as number);
        }}
      />

      <CloseFriendModal
        open={openCloseFriendModal}
        onClose={() => setOpenCloseFriendModal(false)}
        user={user as IOtherUser}
      />

      <div className="w-[350px] h-[473px] bg-[#F1EBE3] border-[#CDCDCD] border flex flex-col justify-center items-center text-center">
        <div className="relative top-[-70px] flex flex-col items-center">
          <div className="relative w-[120px] h-[120px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <img
              alt="profile"
              src={user?.user?.photo ? user?.user?.photo : userIcon}
              className=" w-full h-full object-fill"
            />
          </div>
          <div className=" absolute top-[100px] left-[105px]">
            <img alt="verify" src={verify} />
          </div>
          <p className="flex text-[#C19008] text-[14px] not-italic mt-[15px] justify-center">
            {user?.user?.username}
          </p>
          <p
            style={{ direction: "ltr" }}
            className="text-[#C38F00] text-center text-[20px] font-bold  mt-1"
          >
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
          {!userList?.user?.private &&
            userList?.reverseStatus === "Following" &&
            userList?.status === null && (
              <button
                className=" bg-white border border-[#C38F00] rounded-3xl px-4 py-2 text-[#C38F00]"
                disabled={userList?.status === "Block"}
                onClick={() => handleUnFollow(user?.user?.id as number)}
              >
                دنبال شده
              </button>
            )}

          {user?.user?.private &&
            userList?.reverseStatus === "Following" &&
            userList?.status === null && (
              <Button
                title={" لغو درخواست "}
                disabled={userList?.status === "Block"}
                onClick={() => handleUnFollow(user?.user?.id)}
              />
            )}
          {userList?.reverseStatus === null && userList?.status === null && (
            <Button
              title={"دنبال کردن"}
              disabled={userList?.status === "Block"}
              onClick={() => handleFollow(userList?.user?.id as number)}
            />
          )}

          <div className="flex flex-col items-center my-7">
            <img alt="pin" src={pin} />
            <div className="flex items-center my-3">
              <p className="text-[#17494D] text-xs">
                {Number(user?.user?.postsCount)}
              </p>
              <p className="text-[#17494D] mx-1 text-xs">عکس</p>
            </div>
          </div>
          <div className=" bg-[#F3F0EE] p-5 grid grid-cols-3 gap-3 border  border-zinc-300">
            <Tooltip
              placement="bottom"
              className="text-gray-600 bg-white p-3 rounded-2xl"
              content="دوستان نزدیک"
            >
              <button
                disabled={userList?.status === "Block"}
                className={
                  userList?.status === "Block"
                    ? "w-5 h-5 mx-2 invert-[0.5]"
                    : "w-5 h-5 mx-2"
                }
                onClick={() => setOpenCloseFriendModal(true)}
              >
                <img className="" alt="satr" src={star} />
              </button>
            </Tooltip>
            <Tooltip
              placement="bottom"
              className="text-gray-600 bg-white p-3 rounded-2xl"
              content="چت"
            >
              <button
                disabled={userList?.status === "Block"}
                className={
                  userList?.status === "Block"
                    ? "w-5 h-5 mx-2 invert-[0.5]"
                    : "w-5 h-5 mx-2"
                }
              >
                <img className="" alt="comment" src={comment} />
              </button>
            </Tooltip>
            <Tooltip
              placement="bottom"
              className="text-gray-600 bg-white p-3 rounded-2xl"
              content="بلاک "
            >
              <button
                disabled={userList?.status === "Block"}
                className={
                  userList?.status === "Block"
                    ? " invert-[0.5]"
                    : "w-5 h-5 mx-2"
                }
                onClick={() => setOpenBlockModal(true)}
              >
                <img className="" alt="block" src={block} />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProfile;
