import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import peopleGreen from "../../../assets/icons/personG.svg";
import people from "../../../assets/icons/people.svg";
import overView from "../../../assets/icons/overview.svg";
import overViewGreen from "../../../assets/icons/overviewG.svg";
import add from "../../../assets/icons/add.svg";
import pin from "../../../assets/icons/angled-pin.svg";
import saved from "../../../assets/icons/saved.svg";
import speech from "../../../assets/icons/speech.svg";
import bell from "../../../assets/icons/bell.svg";
import items from "../../../assets/icons/terms.svg";
import clock from "../../../assets/icons/clock.svg";
import person from "../../../assets/icons/person1.svg";

export default function ResponsiveFooter() {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {open ? (
        <div
          className="fixed bottom-0 bg-[#F1EBE3] border border-[#CDCDCD] rounded-t-3xl w-full h-[400px] pt-5 flex flex-col text-[#C19008]"
          onClick={() => setOpen(true)}
        >
          <a className="flex mb-8" href="/home">
            <img alt="" src={pin} className="w-6 mr-8 ml-2" />
            <span>پست ها</span>
          </a>
          <a className="flex mb-8" href="/saves">
            <img alt="" src={saved} className="w-6 mr-8 ml-2" />
            <span>ذخیره ها</span>
          </a>
          <a className="flex mb-8" href="/messages">
            <img alt="" src={speech} className="w-6 mr-8 ml-2" />
            <span>گفتگو ها</span>
          </a>
          <a className="flex mb-8" href="/notification">
            <img alt="" src={bell} className="w-6 mr-8 ml-2" />
            <span>اعلانات</span>
          </a>
          <a className="flex mb-8" href="/followerPage">
            <img alt="" src={items} className="w-6 mr-8 ml-2" />
            <span>مدیریت دوستان</span>
          </a>
          <a className="flex mb-8" href="/home">
            <img alt="" src={clock} className="w-6 mr-8 ml-2" />
            <span>تاریخچه کاربر</span>
          </a>
          <a className="flex mb-8" href="/myCollegeGram">
            <img alt="" src={person} className="w-6 mr-8 ml-2" />
            <span>پروفایل من</span>
          </a>
        </div>
      ) : (
        <div className="w-screen flex justify-center mx-auto">
          <div className="fixed bottom-1 flex w-80 h-14 bg-[#F8F9F9] border border-[#CDCDCD] rounded-[50px] mx-auto mb-7">
            <button onClick={() => navigate("/collegians")}>
              <img
                src={location.pathname === "/collegians" ? peopleGreen : people}
                alt="pepole"
                className="mr-12 my-3 w-6"
              />
            </button>
            <button
              className="rounded-full bg-[#C38F00] w-14 h-14 mr-14 -m-7"
              onClick={() => setOpen(true)}
            >
              <img alt="" src={add} className="w-3 mx-auto my-5" />
            </button>
            <button onClick={() => navigate("/home")}>
              <img
                alt=""
                src={location.pathname === "/home" ? overViewGreen : overView}
                className="mr-20 my-3 w-6"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
