import { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

import Tag from "./Tag";
import { useUser } from "../features/hooks";

import Like from "../assets/icons/heart.svg";
import disLike from "../assets/icons/heart-outline.svg";
import Save from "../assets/icons/saved.svg";
import disSave from "../assets/icons/save-outline.svg";
import more from "../assets/icons/ellipsis.svg";
import edit from "../assets/icons/whiteEdit.svg";
import profile from "../assets/icons/picture frame.svg";
import EditPostModal from "./editpostModal";

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
  const [open, setOpen] = useState<boolean>(false);

  const [isLike, setIsLike] = useState<boolean>(false);
  const [isSave, setIsSave] = useState<boolean>(false);
  const user = useUser();

  return (
    <div>
      <EditPostModal open={open} onClose={() => setOpen(false)} />
      <div className="mr-[20px] mb-6">
        <div className="w-full flex justify-between">
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

          {!user ? (
            <Button
              onClick={() => setOpen(true)}
              className="flex px-4 py-2 m-2 bg-[#C38F00] rounded-2xl"
            >
              <img alt="edit" src={edit} className="w-4 h-4 ml-2" />
              ویرایش پست
            </Button>
          ) : (
            <div className="grid grid-cols-3 gap-1 text-center items-center">
              <Popover placement="bottom">
                <PopoverHandler>
                  <Button className=" relative -left-8 w-4 h-4 ">
                    <img alt="more" src={more} className="w-4 h-4 " />
                  </Button>
                </PopoverHandler>
                <PopoverContent className="w-[230px] text-right bg-[#F1EBE3] m-3  rounded-xl border-gray-400">
                  <ul>
                    <li className=" cursor-pointer mr-2">بلاک کردن کاربر</li>
                    <li className="  cursor-pointer mr-2 my-2">
                      افزودن به دوست نزدیک
                    </li>
                    <li className=" cursor-pointer mr-2">پیام به کاربر</li>
                  </ul>
                </PopoverContent>
              </Popover>

              <div className="flex flex-col text-center ml-1">
                <p className="text-[#17494D] font-bold text-[10px]">
                  متین دهقان
                </p>
                <p className="text-[#17494D] text-[9px] ">
                  170 هزار دنبال‌کننده
                </p>
              </div>
              <img alt="profile" src={profile} className="w-10 h-10" />
            </div>
          )}
        </div>
        <p className="mt-[25px] text-[#17494D] font-normal text-[11px]">
          {date}
        </p>
        <p className="w-[450px] h-[135px] text-[14px] text-[#17494D] font-normal mt-[8px]">
          {caption}
        </p>

        <div className=" flex text-center items-center">
          {tag?.map((tag) => (
            <Tag tag={tag} color="#812AE7" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Caption;
