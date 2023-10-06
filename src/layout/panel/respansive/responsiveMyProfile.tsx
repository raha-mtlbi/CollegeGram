import React, { useState } from "react";
import { useUser } from "../../../features/hooks";
import { getActiveUsers, setActiveUser } from "../../../api/token";

import Button from "../../../component/button";
import EditProfile from "../../../component/editProfileModal";

import arrow from "../../../assets/icons/arrow-down.svg";
import person from "../../../assets/icons/gold-person.svg";
import dot from "../../../assets/icons/ellipsis.svg";

const ResponsiveProfile = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const user = useUser();

  const allUsers = getActiveUsers();

  return (
    <div>
      <EditProfile open={openModal} onClose={() => setOpenModal(false)} />
      {open && (
        <div className="fixed z-10 px-3 bottom-0 bg-[#F1EBE3] border border-[#CDCDCD] rounded-t-3xl w-full h-[125px] pt-5 flex flex-col text-[#C19008]">
          <ul>
            {allUsers?.map((username: string) => (
              <li
                className="  cursor-pointer mb-1 px-2"
                onClick={() => {
                  setActiveUser(username);
                  window.location.reload();
                }}
              >
                {username}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex items-center">
        <div className="rounded-full w-12 h-12 bg-[#F3F0EE] border mt-12 border-[#CDCDCD] mr-7">
          {user?.photo ? (
            <img
              alt="profile"
              src={user?.photo}
              className="w-12 h-12 object-fill rounded-full"
            />
          ) : (
            <img src={person} className="w-8 mx-auto mt-2" alt="person" />
          )}
        </div>

        <div className="mr-5 mt-12">
          <p className="text-[#17494D] text-[16px] font-bold mb-2">
            {user?.name + " " + user?.lastname || "No_Name"}
          </p>

          <p className="flex text-[#C19008] text-[14px] not-italic">
            {user?.username && (
              <button>
                <img
                  src={arrow}
                  className="sm:ml-4 sm:mr-0 mr-4 w-2"
                  alt="arrow"
                  onClick={() => setOpen(true)}
                />
              </button>
            )}

            {user?.username || ""}
          </p>
        </div>

        <div className=" fixed left-3">
          <img
            alt="more"
            src={dot}
            className="w-6 mt-12 cursor-pointer"
            onClick={() => {}}
          />
        </div>
      </div>

      <div className="flex text-[14px] text-[#17494D] mr-12 mt-4">
        <p className="ml-1">{user?.followers || 0}</p>
        <p className="ml-[10px]">دنبال‌کننده </p>
        <p>|</p>
        <p className="mr-2">{user?.following || 0}</p>
        <p className="mr-1"> دنبال‌شونده</p>
      </div>

      <div className="w-screen flex justify-end pl-4">
        <Button title={"ویرایش پروفایل"} onClick={() => setOpenModal(true)} />
      </div>
    </div>
  );
};

export default ResponsiveProfile;
