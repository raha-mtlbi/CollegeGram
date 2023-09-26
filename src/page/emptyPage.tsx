import React from "react";
import tree from "../assets/images/tree.svg";

export default function EmptyPage() {
  return (
    <div className="flex flex-col mt-12 text-center justify-center sm:w-screen ml-24 sm:mx-auto">
      <img className=" h-[220px] " alt="empty" src={tree} />
      <p className="mt-4 font-bold text-[14px] text-gray-800">اطلاعات مورد نظر یافت نشد</p>
    </div>
  );
}
