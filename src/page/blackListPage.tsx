import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { IUser } from "../api/type/user";
import { get } from "../api";

import SideBar from "../component/sidebar";
import FollowerRoute from "../component/followerRoute";
import FollowerUser from "../component/followerUsers";

const BlackList = () => {
  const phone = useMediaQuery("only screen and (max-width : 600px)");
  const [userList, setUserList] = useState<{ result: IUser[] }>();

  useEffect(() => {
    get(`/user/blocked`)
      .then((d: any) => setUserList(d))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex justify-between sm:mt-6 mt-32 w-full">
      <div className="mr-20 sm:mr-6">
        <FollowerRoute />
        <div className="grid grid-cols-2 sm:grid-cols-1 mt-6">
          <FollowerUser userList={userList?.result || []} />
        </div>
      </div>
      <div>{!phone && <SideBar />}</div>
    </div>
  );
};

export default BlackList;
