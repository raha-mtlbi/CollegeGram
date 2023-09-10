import React from "react";

import SideBar from "../component/sidebar";

const Message = () => {
  return (
    <div className="flex  justify-between  mt-32 w-full items-start">
      <div className=" flex flex-col ">
        <p className="px-12 mb-4 font-bold"> message</p>
      </div>

      <SideBar />
    </div>
  );
};

export default Message;
