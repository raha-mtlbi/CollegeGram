import { useState } from "react";
import arrow from "../../assets/icons/arrow-down.svg";
import pen from "../../assets/icons/edit.svg";
import EditProfile from "../../component/editProfileModal";

const ProfileSummery = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      {/* <EditProfile open={open} onClose={() => setOpen(false)} /> */}

      <div className="w-[253px] h-[403px] bg-[#F1EBE3] border-[#CDCDCD] border flex flex-col justify-center items-center text-center">
        <div className="relative w-[120px] h-[120px] overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-[125px] h-[120px] text-gray-400 -left-1"
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
        </div>
        <p className="flex text-[#C19008] text-[20px] not-italic font-bold mt-[15px] justify-center">
          مهشید منزه
          <img src={arrow} className="mt-[9px] mx-[10px]" alt="arrow" />
        </p>
        <p className="text-[#17494D] text-center text-[14px] font-normal mt-1">
          mahmz@
        </p>
        <div className="flex justify-center mt-[16px] text-[14px]">
          <p className="ml-1">13</p>
          <p className="ml-[10px]">دنبال‌کننده </p>
          <p>|</p>
          <p className="mr-2">۷</p>
          <p className="mr-1"> دنبال‌شونده</p>
        </div>
        <p className="text-[#A5A5A5] text-center mt-[30px] text-[14px] px-5">
          Lover, not a fighter, spreading all over the
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
