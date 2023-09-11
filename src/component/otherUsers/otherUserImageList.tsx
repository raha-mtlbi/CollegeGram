import React from "react";
import { useNavigate } from "react-router-dom";

import { imageUrl } from "../../api/config";
import { IImage } from "../../api/type/images";
import { IUser } from "../../api/type/user";

import sample from "../../assets/images/sampleHomeCard.svg";
import board from "../../assets/icons/board.svg";

const privateListImage = [
  { id: 1, image: board },
  { id: 2, image: board },
  { id: 3, image: board },
  { id: 4, image: board },
];

const sampleList = [
  { id: 1, image: sample },
  { id: 2, image: sample },
  { id: 3, image: sample },
  { id: 4, image: sample },
];

export default function UserImageList({
  photoList,
  user,
}: {
  photoList: IImage[];
  user: IUser;
}) {
  const navigate = useNavigate();

  return (
    <div>
      {!user?.private ? (
        <div className="grid grid-cols-2 gap-4 mr-12 ml-5">
          {sampleList.slice(0, 4).map((photo) => (
            <img
              className="cursor-pointer rounded-t-3xl"
              src={photo.image}
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
