import people from "../../assets/icons/people.svg";
import overView from "../../assets/icons/overview.svg";
import add from "../../assets/icons/add.svg";
import pin from "../../assets/icons/angled-pin.svg";
import saved from "../../assets/icons/saved.svg";
import speech from "../../assets/icons/speech.svg";
import bell from "../../assets/icons/bell.svg";
import items from "../../assets/icons/terms.svg";
import clock from "../../assets/icons/clock.svg";
import person from "../../assets/icons/person1.svg";

import { useState } from "react";

export default function ResponsiveFooter() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen((current) => !current);
  };
  return (
    <div className="relative flex w-80 h-14 bg-[#F8F9F9] border border-[#CDCDCD] rounded-[50px] mx-auto mt-[847px] mb-7">
      <button>
        <img src={people} className="mr-12 my-3 w-6" />
      </button>

      <button
        className="rounded-full bg-[#C38F00] w-14 h-14 mr-14 -m-7"
        onClick={handleOpen}
      >
        {open && (
          <div className="absolute bottom-0 left-[-38px] bg-[#F1EBE3] border border-[#CDCDCD] rounded-t-[20px] w-96 h-[440px] flex flex-col text-[#C19008]">
            <a className="flex mb-8 mt-11">
              <img src={pin} className="w-6 mr-8 ml-2" />
              <span>پست ها</span>
            </a>
            <a className="flex mb-8">
              <img src={saved} className="w-6 mr-8 ml-2" />
              <span>ذخیره ها</span>
            </a>
            <a className="flex mb-8">
              <img src={speech} className="w-6 mr-8 ml-2" />
              <span>گفتگو ها</span>
            </a>
            <a className="flex mb-8">
              <img src={bell} className="w-6 mr-8 ml-2" />
              <span>اعلانات</span>
            </a>
            <a className="flex mb-8">
              <img src={items} className="w-6 mr-8 ml-2" />
              <span>مدیریت دوستان</span>
            </a>
            <a className="flex mb-8">
              <img src={clock} className="w-6 mr-8 ml-2" />
              <span>تاریخچه کاربر</span>
            </a>
            <a className="flex mb-8">
              <img src={person} className="w-6 mr-8 ml-2" />
              <span>پروفایل من</span>
            </a>
          </div>
        )}
        <img src={add} className="w-3 mx-auto my-5" />{" "}
      </button>

      <button>
        <img src={overView} className="mr-20 my-3 w-6" />
      </button>
    </div>
  );
}
