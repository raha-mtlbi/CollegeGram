import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { handleFollow } from "../logic/followUser";
import { INotification } from "../api/type/notification";
import { get } from "../api";
import { imageUrl } from "../api/config";

import Button from "../component/button";
import SideBar from "../component/sidebar";

import user from "../assets/icons/person.svg";
import useMediaQuery from "../component/useMediaQuery";

const OtherNotification = () => {
  const phone = useMediaQuery("600");
  const [follows, setFollows] = useState(false);

  const [notification, setNotification] = useState<{
    result: INotification[];
  }>();

  useEffect(() => {
    get("user/me/notification")
      .then((d: any) => setNotification(d))
      .catch((e) => console.log(e));
  }, []);

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
      </div>
      <div className="flex flex-col mt-[66px] h-[500px] overflow-y-autos">
        {notification?.result?.map((item) => {
          return (
            <div className="flex sm:flex-col mb-[24px]">
              {/* profile */}
              <div>
                <div className="rounded-full w-[64px] h-[64px]">
                  {item?.type === "like" ? (
                    <img
                      alt="profile"
                      src={imageUrl + item?.post?.photo}
                      className="w-[60px] h-[60px]"
                    />
                  ) : (
                    <img
                      alt="profile"
                      src={item.user.photo ? imageUrl + item.user.photo : user}
                      className="w-[60px] h-[60px]  rounded-full object-fill"
                    />
                  )}
                </div>
                <div className="mx-[25px] w-[300px]">
                  <p className="text text-sm">
                    {item?.relation === "following" && item?.type === "request"
                      ? `${
                          item?.actor?.username && item?.actor?.username
                        } درخواست دوستی‌ات رو قبول کرد`
                      : item.type === "comment"
                      ? `${item?.actor?.username && item?.actor?.username} ${
                          item?.comment
                        }:برای این عکس کامنت داده`
                      : `${
                          item?.actor?.username && item?.actor?.username
                        }این عکس رو پسندید`}
                  </p>
                  <p className="time text-[#17494D] text-xs mt-1">
                    {Number(item?.createdAt)} دقیقه پیش
                  </p>
                </div>
              </div>
              {/* buttons */}
              <div>
                {item.type === "follow" &&
                  item?.reverseRelation === "following" &&
                  item?.relation === "pending" && (
                    <Button
                      title="دنبال کردن"
                      type="button"
                      width={150}
                      onClick={() => handleFollow(item?.user?.id, setFollows)}
                    />
                  )}
              </div>
            </div>
          );
        })}
      </div>
      <div>{!phone && <SideBar />}</div>
    </div>
  );
};

export default OtherNotification;
