import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "../api";

import Button from "../component/button";
import SideBar from "../component/sidebar";

import user from "../assets/icons/person.svg";
import { acceptRequest, rejectRequest } from "../api/otherUser";

const data = [
  {
    relation: "string",
    reverseRelation: "string",
    id: 0,
    user: {
      id: 0,
      username: "string",
      name: "string",
      lastname: "string",
      photo: "string",
    },
    actor: {
      id: 0,
      username: "string",
      name: "string",
      lastname: "string",
      photo: "string",
    },
    type: "Comment",
    post: "string",
    comment: {
      id: 0,
      likesCount: 0,
      authorProfile: "string",
      parentId: 0,
      author: 0,
      postId: 0,
      content: "string",
    },
  },
];
const data2 = [
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
  const [notification, setNotification] = useState();

  useEffect(() => {
    get("user/me/notification")
      .then((d: any) => setNotification(d))
      .catch((e) => console.log(e));
  }, []);

  const handleAccept = () => {
    try {
      acceptRequest(
        1
        //user?.id as number
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = () => {
    try {
      rejectRequest(
        1
        //user?.id as number
      );
    } catch (error) {
      console.log(error);
    }
  };

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
                {/* profile */}
                <div className="rounded-full w-[64px] h-[64px]">
                  <img
                    alt="profile"
                    src={item.user.photo ? item.user.photo : user}
                    className="w-[40px] h-[40px]"
                  ></img>
                </div>
                <div className="mx-[25px] w-[300px]">
                  {/* description */}
                  <p className="text text-sm">
                    {item.type === "comment"
                      ? `${item.user.username && item.user.username}comment`
                      : item.type === "follow"
                      ? `${item.user.username && item.user.username}follow`
                      : item.type === "request"
                      ? `${item.user.username && item.user.username}request`
                      : `${item.user.username && item.user.username}like`}
                  </p>
                  {/* time */}
                  <p className="time text-[#17494D] text-xs mt-1">3 min</p>
                </div>
                {/* buttons */}
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
                      <button className="text-[#C19008] border-[#C19008] border rounded-3xl px-3 py-2 items-center text-centesr text-[14px] mx-[14px]">
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
