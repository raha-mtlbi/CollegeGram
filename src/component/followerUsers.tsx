import React from "react";
import { IUser } from "../api/type/user";

import more from "../assets/icons/more_button.svg";
import userIcon from "../assets/icons/person.svg";

export default function FollowerUser({ userList }: { userList: IUser[] }) {
  return (
    <>
      {userList?.map((user: any, index: number) => (
        <div className="flex items-center ml-14 mb-5">
          <div className="flex items-center">
            <img
              alt="user"
              src={user?.photo || userIcon}
              className="w-[65px] h-[70px] rounded-xl ml-2"
            />
            <div className="min-w-[200px]">
              <p className="text-[#17494D]">{user?.username}</p>
              <p className="text-[#17494D]">
                {user?.name + " " + user?.lastname}
              </p>
            </div>
          </div>
          <img alt="more" src={more} className=" cursor-pointer" />
        </div>
      ))}
    </>
  );
}
