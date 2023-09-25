import React from "react";
import more from "../assets/icons/more_button.svg";
import fram from "../assets/icons/picture frame.svg";

export default function FollowerUser() {
  const userList = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
  return (
    <>
      {userList?.map((user: any, index: number) => (
        <div className="flex items-center ml-14 mb-5">
          <div className="flex items-center">
            <img
              alt="user"
              src={fram}
              className="w-[65px] h-[70px] rounded-xl ml-2"
            />
            <div className="min-w-[200px]">
              <p className="text-[#17494D]">outlaw</p>
              <p className="text-[#17494D]">محسن سرباز</p>
            </div>
          </div>
          <img alt="more" src={more} className=" cursor-pointer" />
        </div>
      ))}
    </>
  );
}
