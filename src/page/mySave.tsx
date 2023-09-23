import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../api";
import { imageUrl } from "../api/config";
import SideBar from "../component/sidebar";

import { IImage } from "../api/type/images";

const MySavePage = () => {
  const [imageList, setImageList] = useState<{ result: IImage[] }>();
  const navigate = useNavigate();

  useEffect(() => {
    get("/user/myBookmarkeds")
      .then((d: any) => setImageList(d))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex  justify-between mt-32 w-full items-start">
      <div className=" flex flex-col ">
        <p className="px-12 mb-4 font-bold">ذخیره‌های من</p>
        <div className=" grid grid-cols-4 gap-4 mr-12 ml-5">
          {imageList?.result?.map((photo) => (
            <img
              className="w-[230px] h-[230px] cursor-pointer rounded-t-3xl"
              src={imageUrl + photo?.photos[0]}
              alt="postImage"
              onClick={() => navigate(`/myCollegeGram/${photo?.id}`)}
            />
          ))}
        </div>
      </div>

      <SideBar />
    </div>
  );
};

export default MySavePage;
