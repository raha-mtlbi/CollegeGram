import { Dialog } from "@headlessui/react";
import Button from "./button";

import plus from "../assets/icons/plus.svg";
import close from "../assets/icons/close.svg";

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
      <div className="bg-[#F3F0EE] rounded-[24px] absolute top-[30px] bottom-[30px] overflow-y-auto max-h-[650px] p-5">
        <p className="text-center text-[20px] font-bold not-italic leading-normal my-2 ">
          افزودن پست
        </p>
        <label htmlFor={"x"} className=" p-2">
          <input type="file" id={"x"} className="hidden" />
          <div className=" flex items-center cursor-pointer">
            <img alt="camera" src={plus} className="w-[16px] h-[16px] " />
            <p className="text-[#C19008] mr-3 font-bold">بارگذاری عکس‌ها</p>
          </div>
        </label>

        {/* <div className=" grid grid-cols-4 gap-4  ">
          {image.map((i, idx) => (
            <div>
              <button className=" absolute"> 
                <img
                  alt="close"
                  src={close}
                  className=" bg-white rounded-[50%] p-2"
                />
              </button>
              <img
                src={i?.image}
                alt=""
                className="w-[110px] h-[110px] rounded-[24px]"
              />
            </div>
          ))}
        </div> */}

        <div className="mb-5">
          <p className="my-2 text-[#17494D]">توضیحات</p>
          <input className=" w-full h-[164px] rounded-[10px] bg-[#F3F0EE]	border border-[#17494d80] resize-none" />
        </div>
        <div className="my-5">
          <p className="mb-2 text-[#17494D]">تگ‌ها</p>
          <input className="w-full h-[40px] rounded-[10px] bg-[#F3F0EE]	border border-[#17494d80] resize-none" />
        </div>
        <label className="relative inline-flex items-center cursor-pointer mb-6 mt-3">
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            فقط نمایش به دوستان نزدیک
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
