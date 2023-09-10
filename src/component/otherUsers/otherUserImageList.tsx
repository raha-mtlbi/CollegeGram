import React from "react";
import { useNavigate } from "react-router-dom";

import { imageUrl } from "../../api/config";
import { IImage } from "../../api/type/images";

import sample from "../../assets/images/sampleHomeCard.svg";

const images = [
  { id: 1, image: sample },
  { id: 1, image: sample },
  { id: 1, image: sample },
];

export default function UserImageList({ photoList }: { photoList: IImage[] }) {
  const navigate = useNavigate();

  return (
    <div className=" grid grid-cols-2 gap-4 mr-12 ml-5">
      {images.map((photo) => (
        <img
          className="cursor-pointer rounded-t-3xl"
          src={photo.image}
          alt="postImage"
          onClick={() => navigate(`/myCollegeGram/${photo.id}`)}
        />
      ))}
    </div>
  );
}
