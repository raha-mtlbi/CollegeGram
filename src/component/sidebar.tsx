import { Link, useLocation } from "react-router-dom";

import saved from "../assets/icons/saved.svg";
import pin from "../assets/icons/angled-pinG.svg";
import menu from "../assets/icons/menu.svg";
import message from "../assets/icons/message.svg";
import bell from "../assets/icons/bell.svg";

const icons = [
  { link: "", icon: pin, image: "" },
  { link: "", icon: saved, image: "" },
  { link: "", icon: message, image: "" },
  { link: "", icon: bell, image: "" },
  { link: "", icon: menu, image: "" },
];

export default function SideBar() {
  const location = useLocation();

  return (
    <div className="w-[105px] h-[360px] bg-[#F1EBE3] border-[#CDCDCD] border flex flex-col justify-center items-center text-center">
      {icons?.map((i, idx) => (
        <Link to={i.link} key={idx}>
          {location?.pathname === i?.link ? (
            <img alt="icons" src={i?.image} className="my-5" />
          ) : (
            <img alt="icons" src={i?.icon} className="my-5" />
          )}
        </Link>
      ))}
    </div>
  );
}
