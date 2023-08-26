import React, { useState } from "react";
import Like from "../assets/icons/heart.svg";
import disLike from "../assets/icons/heart-outline.svg";
import Save from "../assets/icons/saved.svg";
import disSave from "../assets/icons/save-outline.svg";

const Caption = () => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isSave, setIsSike] = useState<boolean>(false);
  const handleLike = (e: any) => {
    setIsLike((isLike) => !isLike);
  };
  const handleSave = (e: any) => {
    setIsSike((isLike) => !isLike);
  };
  return (
    <div className="mr-[20px]">
      <div className="flex">
        <button onClick={handleLike}>
          <img
            src={isLike ? Like : disLike}
            className="w-[24px] h-[24px]"
          ></img>
        </button>
        <p className="mr-[8px] text-[14px] font-medium text-[#C38F00] my-auto">
          ۱۳۸
        </p>
        <button onClick={handleSave} className="mr-[16px]">
          <img
            src={isSave ? Save : disSave}
            className="w-[24px] h-[24px]"
          ></img>
        </button>
        <p className="mr-[8px] text-[14px] font-medium text-[#C38F00] my-auto">
          15
        </p>
      </div>
      <p className="mt-[25px] text-[#17494D] font-normal text-[11px]">
        2 ماه پیش
      </p>
      <div className="w-[462px] h-[135px] text-[14px] text-[#17494D] font-normal mt-[8px]">
        <span>
          دکوراسیون داخلی به طور کلی به تزیینات و تجهیزات فضای داخلی در خانه‌ها،
          محل کار، مدارس و فضاهای عمومی گفته می شود.دکوراسیون داخلی مربوط به
          تمام جنبه‌های نورپردازی،رنگ،بافت،نگارگری،مبلمان و چیدمان،انتخاب کف‌پوش
          و نصب آن،انتخاب پرده،پنجره‌ها و اکسسوری‌ها می شود.
        </span>
      </div>
      <div
        className=" flex text-center
      "
      >
        <div className="w-[36px] h-[24px] bg-[#0074E8] rounded-[4px] text-[#FFF] text-[14px]">
          سفر
        </div>
        <div className="w-[60px] h-[24px] bg-[#767676] rounded-[4px] text-[#FFF] text-[14px] mr-[8px]">
          بومگردی
        </div>
        <div className="w-[33px] h-[24px] bg-[#008753] rounded-[4px] text-[#FFF] text-[14px] mr-[8px]">
          دریا
        </div>
        <div className="w-[34px] h-[24px] bg-[#00857C] rounded-[4px] text-[#FFF] text-[14px] mr-[8px]">
          ساحل
        </div>
      </div>
    </div>
  );
};

export default Caption;
