import React, { useEffect, useState } from "react";
import { get } from "../api";
import { imageUrl } from "../api/config";
import { ISave } from "../api/type/save";
import { useNavigate } from "react-router-dom";
import SideBar from "../component/sidebar";

import sample from "../assets/images/sampleHomeCard.svg";

const images = [
  { id: 1, image: sample },
  { id: 1, image: sample },
  { id: 1, image: sample },
];

const MySavePage = () => {
  const [imageList, setImageList] = useState<{ result: ISave }>();
  const navigate = useNavigate();

  useEffect(() => {
    get(``)
      .then((d: any) => setImageList(d))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex  justify-between mt-32 w-full items-start">
      <div className=" flex flex-col ">
        <p className="px-12 mb-4 font-bold">ذخیره‌های من</p>
        <div className=" grid grid-cols-4 gap-4 mr-12 ml-5">
          {images.map((photo) => (
            <img
              className="w-[230px] h-[230px] cursor-pointer rounded-t-3xl"
              src={photo.image}
              alt="postImage"
              onClick={() => navigate(`/myCollegeGram/${photo.id}`)}
            />
          ))}
        </div>
      </div>

      <SideBar />
    </div>
  );
};

export default MySavePage;
