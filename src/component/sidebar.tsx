import { Link, useLocation } from "react-router-dom";

import saved from "../assets/icons/saved.svg";
import pinG from "../assets/icons/angled-pinG.svg";
import pin from "../assets/icons/angled-pin.svg";
import menu from "../assets/icons/menu.svg";
import message from "../assets/icons/message.svg";
import bell from "../assets/icons/bell.svg";
import clock from "../assets/icons/clock.svg";

const icons = [
  { link: "/myCollegeGram", icon: pin },
  { link: "/saves", icon: saved },
  { link: "/messages", icon: message },
  { link: "/notification", icon: bell },
  { link: "/followerPage", icon: menu },
  { link: "", icon: clock },
];

export default function SideBar() {
  const location = useLocation();

  return (
    <div className=" px-8 h-fit bg-[#F1EBE3] border-[#CDCDCD] border flex flex-col justify-center items-center text-center py-4">
      {icons?.map((icon, index) => (
        <Link to={icon.link} key={index}>
          <img
            alt="icons"
            src={icon?.icon}
            className={
              location?.pathname === icon?.link
                ? "w-5 h-5 invert-[0.5] my-5"
                : "w-5 h-5 my-5"
            }
          />
        </Link>
      ))}
    </div>
  );
}
