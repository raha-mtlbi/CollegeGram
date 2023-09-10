import React from "react";
import SideBar from "../component/sidebar";
import { Link } from "react-router-dom";
import Button from "../component/button";
import user from "../assets/icons/person.svg";

const data = [
  {
    text: "یاسین اروسخانی درخواست دوستی ات را قبول کرد",
    time: "دقیقه پیش",
    profile: "",
    type: "1",
  },
  {
    text: "متین دهقان دنبالت کرد",
    time: "دقیقه پیش",
    profile: "",
    type: "2",
  },
  {
    text: "یاسین اروسخانی دنبالت کرد",
    time: "دقیقه پیش",
    profile: "",
    type: "3",
  },
  {
    text: "سیمین سحابی این عکس را لایک کرده",
    time: "دقیقه پیش",
    profile: "",
    type: "4",
  },
  {
    text: "سیمین سحابی برای این عکس کامنت داده",
    time: "دقیقه پیش",
    profile: "",
    type: "5",
  },
  {
    text: "متین دهفان درخواست دوستی داده",
    time: "دقیقه پیش",
    profile: "",
    type: "6",
  },
];

const OtherNotification = () => {
  return (
    <div className="flex justify-between mt-32 w-full">
      <div className="mr-20">
        <div className="w-full">
          <Link to="/notification" className={"mx-2 text-gray-400"}>
            اعلانات من
          </Link>
          <span className="mx-4 text-gray-400 "> |</span>
          <Link
            to="/otherNotification"
            className={" mx-2 text-gray-700 font-bold"}
          >
            اعلانات دوستان من
          </Link>
        </div>
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  );
};

export default OtherNotification;
