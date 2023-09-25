import React from "react";

import SideBar from "../component/sidebar";
import FollowerRoute from "../component/followerRoute";
import useMediaQuery from "../component/useMediaQuery";
import FollowerUser from "../component/followerUsers";

const BlackList = () => {
  const phone = useMediaQuery("600");

  return (
    <div className="flex justify-between sm:mt-6 mt-32 w-full">
      <div className="mr-20 sm:mr-6">
        <FollowerRoute />
        <div className="grid grid-cols-2 sm:grid-cols-1 mt-6">
          <FollowerUser />
        </div>
      </div>
      <div>{!phone && <SideBar />}</div>
    </div>
  );
};

export default BlackList;
