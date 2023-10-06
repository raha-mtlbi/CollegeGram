import React from "react";

const BlockPage = ({ name }: { name: string }) => {
  return (
    <div className="w-full flex flex-col text-center">
      <p className="text-[20px] font-bold text-[#17494D]">
        مثل اینکه بلاک شدی!
      </p>
      <div className="font-normal text-[16px] text-[#17494D] mt-3">
        <p>متاسفانه {name} دیگه دوست نداره پست‌ها و</p>
        <p>استوری‌هاش رو باهات به اشتراک بذاره.</p>
        <p>برو دنبال دوست جدید بگرد :)</p>
      </div>
    </div>
  );
};

export default BlockPage;
