import React from "react";
import { useNavigate } from "react-router-dom";
import { IOtherUser } from "../../api/type/otherUser";

import { IImage } from "../../api/type/images";

import board from "../../assets/icons/board.svg";

const privateListImage = [
  { id: 1, image: board },
  { id: 2, image: board },
  { id: 3, image: board },
  { id: 4, image: board },
];

export default function UserImageList({
  list,
  user,
}: {
  list: IImage[] | any;
  user: IOtherUser;
}) {
  const navigate = useNavigate();

  return (
    <div>
      {!user?.user?.private ? (
        <div className="grid grid-cols-2 gap-4 mr-12 ml-5">
          {list?.slice(0, 4).map((photo: any) => (
            <img
              className="w-[360px] h-[350px] cursor-pointer rounded-t-3xl"
              src={photo.photos[0]}
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
