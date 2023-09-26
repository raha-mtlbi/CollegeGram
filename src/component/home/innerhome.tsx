import { useNavigate } from "react-router-dom";
import Button from "../button";

import tree from "../../assets/images/tree.svg";

export default function InnerHome() {
  const navigate = useNavigate();

  return (
    <div >  
      <div className="text-center justify-center flex-col flex ">
        <p className="text-[20px] not-italic font-bold text-center text-[#17494D] mt-[8%]">
          سلام به کالج‌گرام خوش اومدی!
        </p>
        <p className="text-[#17494D] text-[16px] text-center not-italic mt-[20px] max-w-[350px] mx-auto ">
          برای دیدن عکس‌ها توی این صفحه باید کالج‌گرامی‌ها رو دنبال کنی.
          آماده‌ای؟
        </p>

        <div className="mt-[20px]">
          <Button
            title=" رفتن به صفحه کالج‌گرامی‌ها "
            onClick={() => navigate("/collegians")}
            width={250}
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            src={tree}
            alt="tree"
            className="w-[250px] h-[240px]  mt-[80px]"
          />
        </div>
      </div>
    </div>
  );
}
