import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "../api";
import { acceptRequest, rejectRequest } from "../api/otherUser";
import { INotification } from "../api/type/notification";
import { imageUrl } from "../api/config";
import { handleFollow, handleUnFollow } from "../logic/followUser";
import useMediaQuery from "../component/useMediaQuery";

import Button from "../component/button";
import SideBar from "../component/sidebar";

import user from "../assets/icons/person.svg";

const NotificationPage = () => {
  const phone = useMediaQuery("600");
  const [follows, setFollows] = useState(false);
  const [notification, setNotification] = useState<INotification[]>();

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
    <div className="flex justify-between sm:mt-6 mt-32 w-full">
      <div className="sm:mr-3 mr-20">
        {phone && <p className="my-3 mx-2 text-[#17494D] font-bold">اعلانات</p>}
        <div className="w-full sm:text-center ">
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
                  <div className="rounded-full w-[64px] h-[64px]">
                    {item?.type === "Like" || item?.type === "Comment" ? (
                      <img
                        alt="profile"
                        src={imageUrl + item?.post?.photo}
                        className="w-[40px] h-[40px]"
                      />
                    ) : (
                      <img
                        alt="profile"
                        src={
                          item.user.photo ? imageUrl + item.user.photo : user
                        }
                        className="w-[40px] h-[40px]  rounded-full"
                      />
                    )}
                  </div>
                  <div className="mx-[25px] w-[300px]">
                    <p className="text text-sm">
                      { item?.relation === "Following" &&
                      item?.type === "Request"
                        ? `${
                            item?.actor?.username && item?.actor?.username
                          } درخواست دوستی‌ات رو قبول کرد`
                        : item.type === "Comment"
                        ? `${
                            item?.actor?.username && item?.actor?.username
                          } برای این عکس کامنت داده`
                        : item.type === "Follow" &&
                          item?.relation === "Following"
                        ? `${
                            item?.actor?.username && item?.actor?.username
                          } دنبالت کرد`
                        : item.type === "Request" &&
                          item?.reverseRelation === "Pending"
                        ? `${
                            item?.actor?.username && item?.actor?.username
                          } درخواست دوستی داده`
                        : item?.type === "Like" &&
                          `${
                            item?.actor?.username && item?.actor?.username
                          } این عکس رو لایک کرده`}
                    </p>
                    <p className="time text-[#17494D] text-xs mt-1">
                      {Number(item?.createdAt)} دقیقه پیش
                    </p>
                  </div>
                </div>
                {/* buttons */}
                <div>
                  {item.type === "Request" &&
                  item?.reverseRelation === "Pending" ? (
                    <div className="mx-[25px]">
                      <Button
                        title={"قبولههه"}
                        width={"120px"}
                        onClick={() => handleAccept()}
                        type="submit"
                      />
                      <button
                        className="text-[#C38F00] border rounded-3xl border-[#C38F00] px-4 py-1 mr-3"
                        onClick={() => handleReject()}
                        type="submit"
                      >
                        نه خوشم نمیاد ازش
                      </button>
                    </div>
                  ) : item.type === "Follow" &&
                    item?.relation === "Following" ? (
                    <Button
                      title={"دنبال کردن"}
                      width={"120px"}
                      onClick={() => handleFollow(item.user?.id, setFollows)}
                    />
                  ) : (
                    item.type === "Follow" &&
                    item?.reverseRelation === "Following" && (
                      <button
                        className="text-[#C38F00] border rounded-3xl border-[#C38F00] px-4 py-1 mr-3"
                        onClick={() =>
                          handleUnFollow(item?.user?.id, setFollows)
                        }
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
