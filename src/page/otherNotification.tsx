import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { INotification } from "../api/type/notification";
import { get } from "../api";
import { follow } from "../api/otherUser";
import { toast } from "react-toastify";

import Button from "../component/button";
import SideBar from "../component/sidebar";

import user from "../assets/icons/person.svg";
import moment from "jalali-moment";

const OtherNotification = () => {
  const phone = useMediaQuery("only screen and (max-width : 600px)");

  const [notification, setNotification] = useState<INotification[]>();

  useEffect(() => {
    get("/user/friends/notification")
      .then((d: any) => setNotification(d))
      .catch((e) => console.log(e));
  }, []);

  const handleFollow = async (id: number, setFollows?: any) => {
    try {
      const response = await follow(id as number);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between sm:mt-6 mt-32 w-full">
      <div className="mr-20 sm:mr-3">
        {phone && <p className="my-3 mx-2 text-[#17494D] font-bold">اعلانات</p>}

        <div className="w-full sm:text-center ">
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
        <div className="flex flex-col mt-[66px] md:pb-10 h-[500px] overflow-y-autos">
          {notification?.map((item) => {
            return (
              <div className="flex sm:flex-col mb-[24px]">
                {/* profile */}
                <div className="flex ">
                  <div className="rounded-full w-[64px] h-[64px] cursor-pointer">
                    {item?.type === "Like" ? (
                      <img
                        alt="profile"
                        src={item?.post?.photo ? item?.post?.photos[0] : ""}
                        className="w-[40px] h-[40px]"
                      />
                    ) : (
                      <img
                        alt="profile"
                        src={item.actor.photo ? item.actor.photo : user}
                        className="w-[40px] h-[40px]  rounded-full"
                      />
                    )}
                  </div>
                  <div className="mx-[25px] w-[300px]">
                    <p className="text text-sm">
                      {item?.relation === "Following" &&
                      item?.type === "Request"
                        ? `${
                            item?.actor?.username && item?.actor?.username
                          }  درخواست دوستی‌ات رو قبول کرد`
                        : item.type === "Comment"
                        ? `${
                            item?.actor?.username && item?.actor?.username
                          } برای این عکس کامنت داده : ${
                            item?.comment?.content
                          } `
                        : item.type === "Like"
                        ? `${
                            item?.actor?.username && item?.actor?.username
                          } این عکس رو پسندید`
                        : item.type === "Follow"
                        ? ` ${item?.user?.username} ${
                            item?.actor?.username && item?.actor?.username
                          }  را دنبال کرد .`
                        : ""}
                    </p>
                    <p className="time text-[#17494D] text-xs mt-1">
                      {moment(item.createdAt, "YYYY/MM/DD")
                        .locale("fa")
                        .format("YYYY/MM/DD")}{" "}
                    </p>
                  </div>
                </div>
                {/* buttons */}
                <div>
                  {item.type === "Follow" && item?.relation === "Following" && (
                    <Button
                      title="دنبال کردن"
                      type="button"
                      onClick={() => handleFollow(item?.user?.id)}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>{!phone && <SideBar />}</div>
    </div>
  );
};

export default OtherNotification;
