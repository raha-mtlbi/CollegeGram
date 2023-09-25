import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cancel from "../assets/icons/cancel.svg";
import { imageUrl } from "../api/config";
import { ITilmeLine } from "../api/type/timeLine";
import { handleLike, handleUnLike } from "../logic/likePost";

import likeicon from "../assets/icons/heart.svg";
import dislike from "../assets/icons/heart-outline.svg";
import sample from "../assets/images/imageListSampel.svg";
import multiImageIcon from "../assets/icons/multyimages.svg";

const SearchPage = ({ imageList }: { imageList: ITilmeLine[] | any }) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  return (
    <div>
      <div className="text-[#587052] font-bold text-[22px] mr-12 flex ">
        <div className="flex">
          <p>نتیجه جستجو برای: </p>
          <p>دکوراسیون گیاه </p>
        </div>
        <button className="mr-4">
          <img src={cancel} />
        </button>
      </div>

      <div className="w-full grid grid-cols-3 gap-4 mr-12">
        {imageList?.map((data: any, index: number) => (
          <div
            key={index}
            className=" bg-[#F9F9F9] rounded-b-2xl rounded-t-3xl space-y-5 pb-2 mt-4 w-[360px] h-[429px]"
          >
            <img
              className="rounded-t-3xl aspect-square w-[360px] cursor-pointer"
              src={
                data?.post?.photos[0]
                  ? imageUrl + data?.post?.photos[0]
                  : sample
              }
              alt="test"
              onClick={() => navigate("/")}
            />

            <div className="flex">
              <div>
                <button
                  onClick={() => {
                    like || data?.post?.likeCount > 0
                      ? handleUnLike(data?.post?.id, setLike)
                      : handleLike(data?.post?.id, setLike);
                  }}
                >
                  <img
                    className="w-5"
                    src={like || data?.post?.likeCount > 0 ? likeicon : dislike}
                    alt="like"
                  />
                </button>
                <div className="font-medium text-sm text-[#C38F00]">
                  {data?.post.likeCount || 0}
                </div>
              </div>

              {data.photosCount > 1 && (
                <div className="w-5 flex flex-row-reverse">
                  <img src={multiImageIcon} alt="multiImages" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
