import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

import SideBar from "../component/sidebar";

const Message = () => {
  const phone = useMediaQuery("only screen and (max-width : 600px)");

  return (
    <div className="flex  justify-between sm:mt-6 mt-32 w-full items-start">
      <div className=" flex flex-col ">
        <p className="px-12 mb-4 font-bold"> پیام ها</p>
      </div>

      {!phone && <SideBar />}
    </div>
  );
};

export default Message;
