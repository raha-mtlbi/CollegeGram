import React from "react";
import photo from "../assets/images/picture frame.svg";
import arrow from "../assets/icons/arrow-down.svg";
import pen from "../assets/icons/edit.svg";

const ProfileSummery = () => {
  return (
    <div className="w-[253px] h-[403px] bg-[#F1EBE3] border-[#CDCDCD] border">
      <img
        className="rounded-full w-[133px] h-[133px] mx-auto mt-[29px]"
        src={photo}
        alt="ProfilePhoto"
      />
      <p className="flex text-[#C19008] text-[20px] not-italic font-bold mt-[15px] justify-center">
        مهشید منزه
        <img src={arrow} className="mt-[9px] mx-[10px]" />
      </p>
      <p className="text-[#17494D] text-center text-[14px] font-normal">
        mahmz@
      </p>
      <div className="flex justify-center mt-[16px] text-[14px]">
        <p className="ml-[10px]">۱۳ دنبال‌کننده </p>
        <p>|</p>
        <p className="mr-[10px]"> ۷ دنبال‌شونده</p>
      </div>
      <div className="w-[201px] h-[71px] justify-center">
        <p className="text-[#A5A5A5] text-center mt-[30px] text-[14px]">
          Lover, not a fighter, spreading all over the
        </p>
      </div>
      <img className="mx-auto mt-[10px]" src={pen} alt="ProfilePhoto"></img>
    </div>
  );
};

export default ProfileSummery;
