import React, { useState } from "react";
import profile from "../assets/images/picture frame.svg";

import Like from "../assets/icons/heart.svg";
import disLike from "../assets/icons/heart-outline.svg";
import arrow from "../assets/icons/arrow-left-curved.svg";

interface comment {
  name: string;
  time: string;
  text: string;
  reply?: comment;
}

const Comment = () => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [comment, setComment] = useState<comment[]>([
    {
      name: "مهشید منزه",
      time: "۵ هفته پیش",
      text: "خیلی عکس قشنگ و جالبیه. جایی رو می‌شناسی که این دکور رو بسازن؟",
      reply: {
        name: "مهتاب فروغی",
        time: "۵ هفته پیش",
        text: "نه متاسفانه نمی‌شناسم",
      },
    },
    {
      name: "حامد صفری",
      time: "6 هفته پیش",
      text: "خیلی عکس قشنگ و جالبیه. جایی رو می‌شناسی که این دکور رو بسازن؟",
    },
  ]);

  const handleLike = (e: any) => {
    setIsLike((isLike) => !isLike);
  };

  const handleReply = (e: any) => {
    console.log(e.target);
  };

  return (
    <div>
      <div className="flex rounded-full w-[40px] h-[40px]">
        <img src={profile} alt="profile" />
        <input
          className="shadow appearance-none w-[345px] border rounded-3xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 "
          placeholder="نظر خود را بنویسید..."
        />
        <button />
      </div>
      <div>
        {comment &&
          comment.map((item) => {
            return (
              <div>
                {/* comment */}
                <div className="my-5">
                  <div className="flex">
                    <p className="text-[12px] font-bold text-[#17494D] ">
                      {item.name}
                    </p>
                    <p className="mr-[8px] text-[#A5A5A5] text-[10px]">
                      {item.time}
                    </p>
                    <p className="mr-[175px] text-[12px] font-black text-[#C38F00]">
                      2
                    </p>
                    <button onClick={handleLike} className="mr-[8px]">
                      <img src={isLike ? Like : disLike}></img>
                    </button>
                    <button
                      onClick={handleReply}
                      className="mr-[28px] text-[12px] font-black text-[#C38F00]"
                    >
                      {<img src={arrow} className="mr-[6px]" />}پاسخ
                    </button>
                  </div>
                  <p>{item.text}</p>
                </div>
                {/* reply */}
                {item.reply && (
                  <div className="my-5 mr-[32px]">
                    <div className="flex">
                      <p className="text-[12px] font-bold text-[#17494D] ">
                        {item.reply.name}
                      </p>
                      <p className="mr-[8px] text-[#A5A5A5] text-[10px]">
                        {item.reply.time}
                      </p>
                      <p className="mr-[146px] text-[12px] font-black text-[#C38F00]">
                        2
                      </p>
                      <button onClick={handleLike} className="mr-[8px]">
                        <img src={isLike ? Like : disLike}></img>
                      </button>
                      <button
                        onClick={handleReply}
                        className="mr-[28px] text-[12px] font-black text-[#C38F00]"
                      >
                        {<img src={arrow} className="mr-[6px]" />}پاسخ
                      </button>
                    </div>
                    <p>{item.reply.text}</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comment;
