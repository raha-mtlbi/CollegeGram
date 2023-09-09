import React, { useState } from "react";

import image from "../../assets/images/sampleHomeCard.svg";
import likeicon from "../../assets/icons/heart.svg";
import dislike from "../../assets/icons/heart-outline.svg";
import saveIcon from "../../assets/icons/saved.svg";
import unsaved from "../../assets/icons/save-outline.svg";
import commnet from "../../assets/icons/commentIcon.svg";
import multiImageIcon from "../../assets/icons/multyimages.svg";

import Tag from "../Tag";

const HomeCardList = () => {
  const [like, setLike] = useState(false);
  const [saved, setsaved] = useState(false);

  return (
    <div className="bg-gray_50 rounded-b-2xl rounded-t-3xl w-fit space-y-5 pb-2 mt-4">
      <div>
        <img
          className="rounded-t-3xl aspect-square w-[24rem] cursor-pointer"
          src={image}
          alt="test"
        />
      </div>
      <div className="pr-2 space-y-5">
        <div className="flex items-center text-primary_orange gap-8">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => {
                setLike(!like);
              }}
            >
              <img className="w-6" src={like ? likeicon : dislike} alt="like" />
            </button>
            <div className="font-medium text-sm">۱۳۸</div>
          </div>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => {
                setsaved(!saved);
              }}
            >
              <img
                className="w-6"
                src={saved ? saveIcon : unsaved}
                alt="seve"
              />
            </button>
            <div className="font-medium text-sm">۲۴</div>
          </div>
          <div className="flex gap-2 items-center">
            <button>
              <img className="w-6" src={commnet} alt="comment" />
            </button>
            <div className="font-medium text-sm">۷۹</div>
          </div>
          <div className="w-[30%] flex flex-row-reverse">
            <img src={multiImageIcon} alt="multiImages" />
          </div>
        </div>
        <div>ناصر حسین زاده</div>
        <div className="flex">
          <Tag tag={"ایتالیا"} color="#812AE7" />
          <Tag tag={"ایتالیا"} color="#812AE7" />
          <Tag tag={"ایتالیا"} color="#812AE7" />
          <Tag tag={"ایتالیا"} color="#812AE7" />
        </div>
      </div>
    </div>
  );
};

export default HomeCardList;
