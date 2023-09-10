import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../component/sidebar";
import { imageUrl } from "../api/config";
import { ISave } from "../api/type/save";

import sample from "../assets/images/sampleHomeCard.svg";

const images = [
  { id: 1, image: sample },
  { id: 1, image: sample },
  { id: 1, image: sample },
  { id: 1, image: sample },
];

const MySavePage = () => {
  const [imageList, setImageList] = useState<{ result: ISave }>();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mt-32 w-full">
      <div>
        <p>ذخیره‌های من</p>
        <div className="w-full grid grid-cols-4 gap-4 mr-12 ml-5">
          {images.map((photo) => (
            <div key={photo.id} className="w-[230px] h-[230px] cursor-pointer">
              <img
                className="w-[230px] h-[230px]"
                src={photo.image}
                alt="postImage"
                onClick={() => navigate(`/myCollegeGram/${photo.id}`)}
              />
            </div>
          ))}
        </div>
      </div>

      <SideBar />
    </div>
  );
};

export default MySavePage;
