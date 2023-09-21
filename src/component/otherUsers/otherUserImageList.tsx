import React from "react";
import { useNavigate } from "react-router-dom";

import { imageUrl } from "../../api/config";

import board from "../../assets/icons/board.svg";
import { IImage } from "../../api/type/images";

const privateListImage = [
  { id: 1, image: board },
  { id: 2, image: board },
  { id: 3, image: board },
  { id: 4, image: board },
];

export default function UserImageList({ list }: { list: IImage[] | any }) {
  const navigate = useNavigate();

  return (
    <div>
      {!list?.user?.private ? (
        <div className="grid grid-cols-2 gap-4 mr-12 ml-5">
          {list?.slice(0, 4).map((photo: any) => (
            <img
              className="cursor-pointer rounded-t-3xl"
              src={imageUrl + photo.photo}
              alt="postImage"
              onClick={() => navigate(`/friendPost/${photo.id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mr-12 ml-5">
          {privateListImage.slice(0, 4).map((photo) => (
            <img
              className="cursor-pointer rounded-t-3xl"
              src={photo.image}
              alt="postImage"
            />
          ))}
        </div>
      )}
    </div>
  );
}
