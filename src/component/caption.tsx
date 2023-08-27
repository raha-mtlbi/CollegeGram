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
    <div className="mr-[20px] mb-6">
      <div className="flex">
        <button onClick={handleLike}>
          <img
            src={isLike ? Like : disLike}
            className="w-[24px] h-[24px]"
            alt="like"
          />
        </button>
        <p className="mr-[8px] text-[14px] font-medium text-[#C38F00] my-auto">
          ۱۳۸
        </p>
        <button onClick={handleSave} className="mr-[16px]">
          <img
            src={isSave ? Save : disSave}
            className="w-[24px] h-[24px]"
            alt="save"
          />
        </button>
        <p className="mr-[8px] text-[14px] font-medium text-[#C38F00] my-auto">
          15
        </p>
      </div>
      <p className="mt-[25px] text-[#17494D] font-normal text-[11px]">
        2 ماه پیش
      </p>
      <p className="w-[450px] h-[135px] text-[14px] text-[#17494D] font-normal mt-[8px]">
        دکوراسیون داخلی به طور کلی به تزیینات و تجهیزات فضای داخلی در خانه‌ها،
        محل کار، مدارس و فضاهای عمومی گفته می شود.دکوراسیون داخلی مربوط به تمام
        جنبه‌های نورپردازی،رنگ،بافت،نگارگری،مبلمان و چیدمان،انتخاب کف‌پوش و نصب
        آن،انتخاب پرده،پنجره‌ها و اکسسوری‌ها می شود.
      </p>
      <div className=" flex text-center items-center">
        <div className="p-2 bg-[#0074E8] rounded-[4px] text-[#FFF] text-[14px]">
          سفر
        </div>
        <div className="p-2 bg-[#767676] rounded-[4px] text-[#FFF] text-[14px] mr-[8px]">
          بومگردی
        </div>
        <div className="p-2 bg-[#008753] rounded-[4px] text-[#FFF] text-[14px] mr-[8px]">
          دریا
        </div>
        <div className="p-2 bg-[#00857C] rounded-[4px] text-[#FFF] text-[14px] mr-[8px]">
          ساحل
        </div>
      </div>
    </div>
  );
};

export default Caption;
