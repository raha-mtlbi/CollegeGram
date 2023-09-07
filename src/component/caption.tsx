import { useState } from "react";

import Like from "../assets/icons/heart.svg";
import disLike from "../assets/icons/heart-outline.svg";
import Save from "../assets/icons/saved.svg";
import disSave from "../assets/icons/save-outline.svg";
import Tag from "./Tag";

interface ICaption {
  commentsCount: number;
  likeCount: number;
  bookmarkCount: number;
  date: any;
  caption: string;
  tag: string[];
}

const Caption = ({
  commentsCount,
  likeCount,
  bookmarkCount,
  date,
  caption,
  tag,
}: ICaption) => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isSave, setIsSave] = useState<boolean>(false);

  return (
    <div className="mr-[20px] mb-6">
      <div className="flex">
        <button onClick={() => setIsLike((isLike) => !isLike)}>
          <img
            src={isLike ? Like : disLike}
            className="w-[24px] h-[24px]"
            alt="like"
          />
        </button>
        <p className="mr-[8px] text-[14px] font-medium text-[#C38F00] my-auto">
          {likeCount}
        </p>
        <button
          onClick={() => setIsSave((isSave) => !isSave)}
          className="mr-[16px]"
        >
          <img
            src={isSave ? Save : disSave}
            className="w-[24px] h-[24px]"
            alt="save"
          />
        </button>
        <p className="mr-[8px] text-[14px] font-medium text-[#C38F00] my-auto">
          {bookmarkCount}
        </p>
      </div>
      <p className="mt-[25px] text-[#17494D] font-normal text-[11px]">{date}</p>
      <p className="w-[450px] h-[135px] text-[14px] text-[#17494D] font-normal mt-[8px]">
        {caption}
      </p>
      <div className=" flex text-center items-center">
        {tag?.map((tag) => (
<<<<<<< HEAD
          <Tag tag={tag} color="#812AE7" />
=======
          <div
            className={"p-2 bg-[#0074E8] rounded-[4px] text-[#FFF] text-[14px] m-2"}
          >
            {tag}
          </div>
>>>>>>> 1670c02db9279f5b4ccd1a8fabcf1d3b1b1a7dcc
        ))}
        {/* <div className="p-2 bg-[#767676] rounded-[4px] text-[#FFF] text-[14px] mr-[8px]">
          بومگردی
        </div>
        <div className="p-2 bg-[#008753] rounded-[4px] text-[#FFF] text-[14px] mr-[8px]">
          دریا
        </div>
        <div className="p-2 bg-[#00857C] rounded-[4px] text-[#FFF] text-[14px] mr-[8px]">
          ساحل
        </div> */}
      </div>
    </div>
  );
};

export default Caption;
