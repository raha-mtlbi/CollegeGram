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
  { link: "", icon: message },
  { link: "/notification", icon: bell },
  { link: "", icon: menu },
  { link: "", icon: clock },
];

export default function SideBar() {
  const location = useLocation();

  return (
    <div className="w-28 h-fit bg-[#F1EBE3] border-[#CDCDCD] border flex flex-col justify-center items-center text-center py-4">
      {icons?.map((icon, index) => (
        <Link className="" to={icon.link} key={index}>
          {location?.pathname === icon?.link ? (
            <img alt="icons" src={icon?.icon} className="invert-[0.5] my-5" />
          ) : (
            <img alt="icons" src={icon?.icon} className="my-5" />
          )}
        </Link>
      ))}
    </div>
  );
}
