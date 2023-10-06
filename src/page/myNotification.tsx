import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import moment from "jalali-moment";

import { toast } from "react-toastify";
import { get } from "../api";
import { INotification } from "../api/type/notification";
import {
  acceptRequest,
  follow,
  rejectRequest,
  unFollow,
} from "../api/otherUser";

import Button from "../component/button";
import SideBar from "../component/sidebar";

import user from "../assets/icons/person.svg";

const NotificationPage = () => {
  const phone = useMediaQuery("only screen and (max-width : 600px)");
  const [notification, setNotification] = useState<INotification[]>();
  const navigate = useNavigate();

  useEffect(() => {
    get("/user/me/notification")
      .then((d: any) => setNotification(d))
      .catch((e) => console.log(e));
  }, []);

  const handleFollow = async (id: number, setFollows?: any) => {
    try {
      const response = await follow(id as number);
      const newData = await get(`/user/me/notification`);
      setNotification(newData);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnFollow = async (id: number, setFollows?: any) => {
    try {
      const response = await unFollow(id as number);
      const newData = await get(`/user/me/notification`);
      setNotification(newData);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccept = async (id: number) => {
    try {
      const response = await acceptRequest(id as number);
      const newData = await get(`/user/me/notification`);
      setNotification(newData);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (id: number) => {
    try {
      const response = await rejectRequest(id as number);
      const newData = await get(`/user/me/notification`);
      setNotification(newData);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between sm:mt-6 mt-32 w-full">
      <div className="sm:mr-3 mr-20">
        {phone && <p className="my-3 mx-2 text-[#17494D] font-bold">اعلانات</p>}
        <div className="w-full ">
          <Link to="/notification" className={" mx-2 text-gray-700 font-bold"}>
            اعلانات من
          </Link>
          <span className="mx-4 text-gray-400 "> | </span>
          <Link to="/otherNotification" className={"mx-2 text-gray-400"}>
            اعلانات دوستان من
          </Link>
        </div>

        <div className="flex flex-col mt-[66px] h-[500px] overflow-y-autos">
          {notification?.map((item) => {
            return (
              <div className="flex sm:flex-col mb-[24px]">
                {/* profile */}
                <div className="flex">
                  <div
                    className="rounded-full w-[64px] h-[64px] cursor-pointer"
                    onClick={() => navigate(`/usersProfile/${item?.actor?.id}`)}
                  >
                    {item?.type === "Like" || item?.type === "Comment" ? (
                      <img
                        alt="profile"
                        src={String(item?.post?.photo)}
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
                      {item?.relation === "Pending" && item?.type === "Follow"
                        ? `${
                            item?.actor?.username && item?.actor?.username
                          } درخواست دوستی‌ات رو قبول کرد`
                        : item.type === "Comment"
                        ? `${
                            item?.actor?.username && item?.actor?.username
                          } برای این عکس کامنت داده`
                        : (item.type === "Follow" || item.type === "Accept") &&
                          item?.relation === "Following"
                        ? `${
                            item?.actor?.username && item?.actor?.username
                          } دنبالت کرد`
                        : item.type === "Follow" || item.type === "Accept"
                        ? `${
                            item?.actor?.username && item?.actor?.username
                          } دنبالت کرد`
                        : item.type === "Request" &&
                          item?.relation === "Pending"
                        ? `${
                            item?.actor?.username && item?.actor?.username
                          } درخواست دوستی داده`
                        : item.type === "Request" &&
                          item?.relation === "Following"
                        ? ` درخواست دوستی توسط شما به
                        ${
                          item?.actor?.username && item?.actor?.username
                        } ارسال شد`
                        : item.type === "Reject" &&
                          item?.relation === "Following"
                        ? `${
                            item?.actor?.username && item?.actor?.username
                          }درخواست توسط شما رد شد`
                        : item?.type === "Like" &&
                          `${
                            item?.actor?.username && item?.actor?.username
                          } این عکس رو لایک کرده`}
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
                  {item.type === "Request" && item?.relation === "Pending" ? (
                    <div className="mx-[25px]">
                      <Button
                        title={"قبولههه"}
                        onClick={() => handleAccept(item?.actor?.id)}
                        type="submit"
                      />
                      <button
                        className="text-[#C38F00] border rounded-3xl border-[#C38F00] px-4 py-1 mr-3"
                        onClick={() => handleReject(item?.actor?.id)}
                        type="submit"
                      >
                        نه خوشم نمیاد ازش
                      </button>
                    </div>
                  ) : item.type === "Follow" &&
                    item?.relation === "Following" &&
                    item?.reverseRelation !== "Following" ? (
                    <Button
                      title={"دنبال کردن"}
                      onClick={() => handleFollow(item.actor?.id)}
                    />
                  ) : (
                    item.type === "Follow" &&
                    item?.relation === "Following" &&
                    item?.actor?.private && (
                      <button
                        className="text-[#C38F00] border rounded-3xl border-[#C38F00] px-4 py-1 mr-3"
                        onClick={() => handleUnFollow(item?.actor?.id)}
                      >
                        لغو درخواست
                      </button>
                    )
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

export default NotificationPage;
