import Textarea from "@material-tailwind/react/components/Textarea";
import { Dialog } from "@headlessui/react";
import Button from "./button";

import plus from "../assets/icons/plus.svg";

const CreatePostModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="flex justify-center items-center "
      style={{ direction: "rtl" }}
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="bg-[#F3F0EE] rounded-[24px] absolute top-[30px] bottom-[30px] overflow-y-auto p-5">
        <p className="text-center text-[20px] font-bold not-italic text-[#17494D] leading-normal my-2 ">
          افزودن عکس
        </p>
        <p className="mt-6 text-[#17494D]">بارگذاری عکس‌ها * </p>
        <label htmlFor={"x"} className=" p-2">
          <input type="file" id={"x"} className="hidden" />
          <div className="w-[90px] h-[90px] rounded-lg border-4 border-[#17494D] flex justify-center items-center ">
            <img
              alt="camera"
              src={plus}
              className="w-[36px] h-[36px] cursor-pointer"
            />
          </div>
        </label>
        <div className="mb-5">
          <p className="mb-2 text-[#17494D]">توضیحات</p>
          <input
            multiple
            className="w-[311px] h-[88px] rounded-[10px] bg-[#F3F0EE]	border border-[#17494d80] resize-none"
          />
        </div>
        <div className="my-5">
          <p className="mb-2 text-[#17494D]">تگ‌ها</p>
          <input
            multiple
            className="w-[311px] h-[88px] rounded-[10px] bg-[#F3F0EE]	border border-[#17494d80] resize-none"
          />
        </div>
        <label className="relative inline-flex items-center cursor-pointer mb-6 mt-3">
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            فقط نمایش به دوستان نزدیک{" "}
          </span>
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus: rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gray-800"></div>
        </label>
        <div className="flex justify-end mt-10">
          <button className="mx-6" onClick={onClose}>
            پشیمون شدم
          </button>
          <Button title={"ثبت تغییرات"} width={"110px"} onClick={() => {}} />
        </div>
      </div>
    </Dialog>
  );
};

export default CreatePostModal;
