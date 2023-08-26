import { useState } from "react";
import Button from "../component/button";
import CreatePostModal from "./createPost";

const EmptyMyCollage = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col justify-center items-center text-center">
      <CreatePostModal open={open} onClose={() => setOpen(false)} />
      <p className="text-[#17494D] font-bold text-[20px] not-italic w-[359px] h-[50px]">
        سلام به کالج‌گرام من خوش اومدی!
      </p>
      <div className="w-[359px] h-[160px] text-[#17494D] text-[16px] not-italic">
        <p>
          از اینجا به تمام محتواهایی مثل پست، ذخیره‌ها، پیام‌ها و... دسترسی داری
          کافیه بخش مرتبط رو از منوی سمت چپ انتخاب کنی.
        </p>
        <p className="mt-[40px]">حالا وقت گذاشتن اولین پست هست :)</p>
      </div>
      <div className="mt-[24px]">
        <Button
          title="افزودن اولین پست"
          onClick={() => setOpen(true)}
          width={139}
        />
      </div>
    </div>
  );
};

export default EmptyMyCollage;
