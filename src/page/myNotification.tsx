import React from "react";
import SideBar from "../component/sidebar";
import { Link, useLocation } from "react-router-dom";
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

const NotificationPage = () => {
  return (
    <div className="flex justify-between mt-32 w-full">
      <div className="mr-20">
        <div className="w-full">
          <Link to="/notification" className={" mx-2 text-gray-700 font-bold"}>
            اعلانات من
          </Link>
          <span className="mx-4 text-gray-400 "> |</span>
          <Link to="/otherNotification" className={"mx-2 text-gray-400"}>
            اعلانات دوستان من
          </Link>
        </div>
        <div className="flex flex-col mt-[66px] h-[500px] overflow-y-autos">
          {data.map((item) => {
            return (
              <div className="flex mb-[24px]">
                <div className="rounded-full w-[64px] h-[64px]">
                  <img
                    alt="profile"
                    src={item.profile ? item.profile : user}
                    className="w-[40px] h-[40px]"
                  ></img>
                </div>
                <div className="mx-[25px]">
                  <p className="text">{item.text}</p>
                  <p className="time">{item.time}</p>
                </div>
                {(item.type === "2" ||
                  item.type === "3" ||
                  item.type === "6") && (
                  <div className="mx-[25px]">
                    {(item.type === "2" || item.type === "6") && (
                      <Button
                        title={item.type === "2" ? "دنبال کردن" : "قبولههههه"}
                        width={100}
                      />
                    )}

                    {(item.type === "3" || item.type === "6") && (
                      <button className="text-white border-[#C19008] border rounded-3xl px-3 py-2 items-center text-centesr text-[14px] mx-[14px]">
                        {item.type === "3"
                          ? "لغو درخواست"
                          : "نه خوشم نمیاد ازش"}
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  );
};

export default NotificationPage;
