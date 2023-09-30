import React from "react";
import { useNavigate } from "react-router-dom";

import { IImage } from "../../api/type/images";

import sample from "../../assets/images/imageListSampel.svg";

export default function ImageList({ photoList }: { photoList: IImage[] }) {
  const navigate = useNavigate();

  return (
    <div className="w-full grid sm:grid-cols-2 grid-cols-4 gap-4 mr-12 ml-5 sm:mt-10">
      {photoList.map((photo) => (
        <img
          className="sm:w-[150px] w-[230px] sm:h-[165px] h-[230px] object-fill cursor-pointer rounded-t-3xl"
          src={photo?.photos[0] ? photo.photos[0] : sample}
          alt="postImage"
          onClick={() => navigate(`/myCollegeGram/${photo.id}`)}
        />
      ))}
    </div>
  );
}
