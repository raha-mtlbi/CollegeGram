import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../api";
import SideBar from "../component/sidebar";

import { IImage } from "../api/type/images";
import useMediaQuery from "../component/useMediaQuery";
import EmptyPage from "./emptyPage";

const MySavePage = () => {
  const phone = useMediaQuery("600");
  const [imageList, setImageList] = useState<{
    result: IImage[];
    msg: string;
  }>();
  const navigate = useNavigate();

  useEffect(() => {
    get("/user/myBookmarkeds")
      .then((d: any) => setImageList(d))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="flex justify-between sm:mt-6 mt-32 w-full items-start">
        <div className=" flex flex-col ">
          <p className="px-12 mb-4 font-bold">ذخیره‌های من</p>
          <div className=" grid sm:grid-cols-2 grid-cols-4 gap-4 mr-12 ml-5">
            {imageList?.result?.map((photo) => (
              <img
                className="w-[230px] h-[230px] sm:h-[165px] sm:w-[150px] cursor-pointer rounded-t-3xl"
                src={photo?.photos[0]}
                alt="postImage"
                onClick={() => navigate(`/myCollegeGram/${photo?.id}`)}
              />
            ))}
          </div>
        </div>
        {imageList?.msg === "پست مورد نظر یافت نشد" && <EmptyPage />}

        {!phone && <SideBar />}
      </div>
    </>
  );
};

export default MySavePage;
