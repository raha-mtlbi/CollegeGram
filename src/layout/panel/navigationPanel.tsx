import { Link, useLocation } from "react-router-dom";

import home from "../../assets/icons/overviewY.svg";
import homeGreen from "../../assets/icons/overviewG.svg";
import person from "../../assets/icons/personY.svg";
import personGreen from "../../assets/icons/personG.svg";
import pepole from "../../assets/icons/peopleY.svg";

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="mt-[20px] mb-[30px]">
      <Link to={"/home"} className="flex">
        {location?.pathname === "/home" ? (
          <img src={homeGreen} alt="home" />
        ) : (
          <img src={home} alt="home" />
        )}
        <p
          className={
            location?.pathname === "/home"
              ? "text-[#587052] mr-4"
              : "text-[#C19008] mr-4"
          }
        >
          خانه
        </p>
      </Link>
      <Link to={"/collegians"} className="flex my-4">
        {location?.pathname === "/collegians" ? (
          <img src={pepole} alt="pepole" />
        ) : (
          <img src={pepole} alt="pepole" />
        )}
        <p
          className={
            location?.pathname === "/collegians"
              ? "text-[#587052] mr-4"
              : "text-[#C19008] mr-4"
          }
        >
          کالج‌گرامی‌‌ها
        </p>
      </Link>
      <Link to={"/myCollegeGram"} className="flex">
        {location?.pathname === "/myCollegeGram" ? (
          <img src={personGreen} alt="person" />
        ) : (
          <img src={person} alt="person" />
        )}
        <p
          className={
            location?.pathname === "/myCollegeGram"
              ? "text-[#587052] mr-4"
              : "text-[#C19008] mr-4"
          }
        >
          کالج‌گرام من
        </p>
      </Link>
    </div>
  );
}
