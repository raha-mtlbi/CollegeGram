import React from "react";
import { useNavigate } from "react-router-dom";

import { imageUrl } from "../../api/config";
import { IImage } from "../../api/type/images";

import sample from "../../assets/images/imageListSampel.svg";

export default function ImageList({ photoList }: { photoList: IImage[] }) {
  const navigate = useNavigate();

  return (
    <div className="w-full grid grid-cols-4 gap-4 mr-12 ml-5">
      {photoList.map((photo) => (
        <img
          className="w-[230px] h-[230px] cursor-pointer rounded-t-3xl"
          src={photo?.photos[0] ? imageUrl + photo.photos[0] : sample}
          alt="postImage"
          onClick={() => navigate(`/myCollegeGram/${photo.id}`)}
        />
      ))}
    </div>
  );
}
