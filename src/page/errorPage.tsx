import React from "react";
import tree from "../assets/images/tree.svg";

const ErrorPage = () => {
  return (
    <div>
      <p className="text-[40px] not-italic font-bold text-center text-[#17494D] justify-center flex-col flex mt-[201px]">
        !وای اینجا چخبره؟
      </p>
      <p className="text-[#17494D] font-bold text-[25px] text-center not-italic mt-[20px] flex-col	justify-center">
        !ظاهرا یک مشکلی وجود داره
      </p>
      <p className="text-[#17494D] text-[16px] not-italic font-normal mt-[25px] flex-col	justify-center leading-8">
        .ما داریم تلاش میکنیم که برطرفش کنیم<br></br>.لطفا چنددقیقه دیگه دوباره
        تلاش کن
      </p>
      <button
        className="bg-[#C19008] h-[36px] w-[163px] rounded-2xl mt-[40px] justify-center items-center	"
        // onClick={}
      >
        <span className="text-[#fff] text-[14px] leading-5">
          بازگشت به صفحه قبلی
        </span>
      </button>
      <img
        src={tree}
        alt="tree"
        className="items-center justify-center ml-[832px] mt-[80px]"
      ></img>
    </div>
  );
};

export default ErrorPage;
