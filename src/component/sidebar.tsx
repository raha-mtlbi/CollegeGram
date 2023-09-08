import { Link, useLocation } from "react-router-dom"

import saved from "../assets/icons/saved.svg"
import pin from "../assets/icons/angled-pinG.svg"
import menu from "../assets/icons/menu.svg"
import message from "../assets/icons/message.svg"
import bell from "../assets/icons/bell.svg"
import clock from "../assets/icons/clock.svg"

const icons = [
  { link: "/myCollegeGram", icon: pin, image: "" },
  { link: "/saves", icon: saved, image: "" },
  { link: "", icon: message, image: "" },
  { link: "/notification", icon: bell, image: "" },
  { link: "", icon: menu, image: "" },
  { link: "", icon: clock, image: "" },
]

export default function SideBar() {
  const location = useLocation()

  return (
    <div className="w-28 h-fit bg-[#F1EBE3] border-[#CDCDCD] border flex flex-col justify-center items-center text-center py-4">
      {icons?.map((icon, index) => (
        <Link to={icon.link} key={index}>
          {location?.pathname === icon?.link ? (
            <img alt="icons" src={icon?.icon} className="invert-[0.5] my-5" />
          ) : (
            <img alt="icons" src={icon?.icon} className="my-5" />
          )}
        </Link>
      ))}
    </div>
  )
}
