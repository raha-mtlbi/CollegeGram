import { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

import EditProfile from "../../component/editProfileModal";
import { imageUrl } from "../../api/config";
import { useUser } from "../../features/hooks";

import arrow from "../../assets/icons/arrow-down.svg";
import pen from "../../assets/icons/edit.svg";

const ProfileSummery = () => {
  const [open, setOpen] = useState<boolean>(false);
  const user = useUser();
  console.log("user", user);

  return (
    <div>
      <EditProfile open={open} onClose={() => setOpen(false)} />

      <div className="w-[253px] h-[403px] bg-[#F1EBE3] border-[#CDCDCD] border flex flex-col justify-center items-center text-center">
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
            <Popover placement="bottom">
              <PopoverHandler>
                <Button>
                  <img src={arrow} className="my-auto mx-[10px]" alt="arrow" />
                </Button>
              </PopoverHandler>
              <PopoverContent className="w-[150px] text-right mr-3 border-gray-400 rounded-xl ">
                <ul>
                  <li className=" cursor-pointer mr-2">{user.username}</li>
                  <li className="  cursor-pointer mr-2 mt-2">
                    {user.username}
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          )}
          {user?.username || ""}
        </p>
        <p className="text-[#17494D] text-center text-[20px] font-bold  mt-1">
          {user?.name + "" + user?.lastname || ""}
        </p>
        <div className="flex justify-center mt-[16px] text-[14px]">
          <p className="ml-1">{user?.followers}</p>
          <p className="ml-[10px]">دنبال‌کننده </p>
          <p>|</p>
          <p className="mr-2">{user?.following}</p>
          <p className="mr-1"> دنبال‌شونده</p>
        </div>
        <p className="text-[#A5A5A5] text-center mt-[30px] text-[14px] px-5">
          {user?.bio}
        </p>
        <button data-model-toggle="staticModal" onClick={() => setOpen(true)}>
          <img
            className=" mx-auto mt-[20px]"
            src={pen}
            alt="ProfilePhoto"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default ProfileSummery;
