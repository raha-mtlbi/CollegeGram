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
      {!user?.user?.private ||
      (user?.user?.private &&
        user?.reverseStatus === "Following" &&
        user?.status === "Following") ? (
        <div className="flex flex-wrap gap-4 mr-12 ml-5 md:mt-2 md:pb-5">
          {list?.map((photo: any) => (
            <img
              className="w-[300px] h-[330px] object-fill cursor-pointer rounded-t-3xl"
              src={photo.photos[0]}
              alt="postImage"
              onClick={() => navigate(`/friendPost/${photo.id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 mr-12 ml-5">
          {privateListImage.slice(0, 4).map((photo) => (
            <img
              className="w-[300px] h-[330px] object-fill cursor-pointer rounded-t-3xl"
              src={photo.image}
              alt="postImage"
            />
          ))}
        </div>
      )}
    </div>
  );
}
