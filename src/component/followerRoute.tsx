import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "./useMediaQuery";

import down from "../assets/icons/down.svg";

export default function FollowerRoute() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const phone = useMediaQuery("600");

  const link = [
    { href: "/followerPage", name: "دنبال کننده‌ها" },
    { href: "/followingPage", name: "دنبال شونده‌ها" },
    { href: "/friendList", name: "دوستان نزدیک" },
    { href: "/blackList", name: "لیست سیاه" },
  ];

  return (
    <>
      {phone && (
        <p className="my-3 mx-2 text-[#17494D] font-bold">مدیریت دوستان</p>
      )}

      <div className="w-full flex">
        {phone ? (
          <>
            {open ? (
              <div
                className="fixed bottom-0 left-0 right-0 z-10 bg-[#F1EBE3] border border-[#CDCDCD] rounded-t-3xl w-full h-[230px] pr-7 pt-5 flex flex-col text-[#C19008]"
                onClick={() => setOpen(false)}
              >
                {link.map((link, index: number) => (
                  <Link key={index} to={link?.href} className="my-3">
                    {link?.name}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex">
                {link.map((link, index: number) => (
                  <Link key={index} to={link?.href} className="ml-1">
                    {location?.pathname === link?.href && link?.name}
                  </Link>
                ))}
                <img alt="open" src={down} onClick={() => setOpen(true)} />
              </div>
            )}
          </>
        ) : (
          <>
            {link?.map((link, index: number) => (
              <div key={index}>
                <Link
                  to={link?.href}
                  className={
                    link?.href === location?.pathname
                      ? "mx-2 text-gray-700 font-bold"
                      : " mx-2 text-gray-400"
                  }
                >
                  {link.name}
                </Link>
                {link?.name !== "لیست سیاه" && (
                  <span className="mx-4 text-gray-400 "> | </span>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
