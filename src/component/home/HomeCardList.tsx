import React, { useState } from "react";

import Tag from "../Tag";

import image from "../../assets/images/sampleHomeCard.svg";
import likeicon from "../../assets/icons/heart.svg";
import dislike from "../../assets/icons/heart-outline.svg";
import saveIcon from "../../assets/icons/saved.svg";
import unsaved from "../../assets/icons/save-outline.svg";
import commnet from "../../assets/icons/commentIcon.svg";
import multiImageIcon from "../../assets/icons/multyimages.svg";

const data = [
  {
    image: image,
    imageCount: 1,
    likeCount: 14,
    saveCount: 12,
    commentCount: 10,
    name: "ناصر حسین زاده",
  },
  {
    image: image,
    imageCount: 2,
    likeCount: 14,
    saveCount: 12,
    commentCount: 10,
    name: "ناصر حسین زاده",
  },
  {
    image: image,
    imageCount: 2,
    likeCount: 14,
    saveCount: 12,
    commentCount: 10,
    name: "ناصر حسین زاده",
  },
];

const HomeCardList = () => {
  const [like, setLike] = useState(false);
  const [saved, setsaved] = useState(false);

  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {data.map((data, index) => (
        <div
          key={index}
          className=" bg-white rounded-b-2xl rounded-t-3xl w-fit space-y-5 pb-2 mt-4"
        >
          <img
            className="rounded-t-3xl aspect-square w-[24rem] cursor-pointer"
            src={data?.image}
            alt="test"
          />

          <div className="px-2 space-y-5">
            <div className="grid grid-cols-4 text-primary_orange gap-8">
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => {
                    setLike(!like);
                  }}
                >
                  <img
                    className="w-5"
                    src={like ? likeicon : dislike}
                    alt="like"
                  />
                </button>
                <div className="font-medium text-sm">{data.likeCount}</div>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => {
                    setsaved(!saved);
                  }}
                >
                  <img
                    className="w-5"
                    src={saved ? saveIcon : unsaved}
                    alt="seve"
                  />
                </button>
                <div className="font-medium text-sm">{data.saveCount}</div>
              </div>
              <div className="flex gap-2 items-center">
                <button>
                  <img className="w-5" src={commnet} alt="comment" />
                </button>
                <div className="font-medium text-sm">{data.commentCount}</div>
              </div>
              {data.imageCount > 1 && (
                <div className="w-5 flex flex-row-reverse">
                  <img src={multiImageIcon} alt="multiImages" />
                </div>
              )}
            </div>
            <p>{data.name}</p>
            <Tag tag={"ایتالیا"} color="#812AE7" width="50px" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCardList;
