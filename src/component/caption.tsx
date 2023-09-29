import { useEffect, useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

import Tag from "./Tag";
import { useUser } from "../features/hooks";
import EditPostModal from "./editpostModal";
import {
  handleBookmark,
  handleLike,
  handleUnBookmark,
  handleUnLike,
} from "../logic/likePost";
import { get } from "../api";
import { IOtherUser } from "../api/type/otherUser";
import BlockModal from "./blockModal";
import BestFriendModal from "./closeFriendModal";
import { handleBlock } from "../logic/followUser";

import Like from "../assets/icons/heart.svg";
import disLike from "../assets/icons/heart-outline.svg";
import Save from "../assets/icons/saved.svg";
import disSave from "../assets/icons/save-outline.svg";
import more from "../assets/icons/ellipsis.svg";
import edit from "../assets/icons/whiteEdit.svg";
import userImage from "../assets/icons/person.svg";

interface ICaption {
  commentsCount: number;
  likeCount: number;
  bookmarkCount: number;
  date: any;
  caption: string;
  tag: string[];
  id?: number;
  author: number;
}

const Caption = ({
  commentsCount,
  likeCount,
  bookmarkCount,
  date,
  caption,
  tag,
  id,
  author,
}: ICaption) => {
  const [open, setOpen] = useState<boolean>(false);
  const [blockOpen, setBlockOpen] = useState<boolean>(false);
  const [friendOpen, setFriendOpen] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const [isSave, setIsSave] = useState<boolean>(false);
  const [blocks, setBlocks] = useState(false);

  const [otherUser, setOtherUser] = useState<IOtherUser>();
  const user = useUser();

  useEffect(() => {
    get(`/user/${author}/profile`)
      .then((d: any) => setOtherUser(d))
      .catch((e) => console.log(e));
  }, [author]);

  return (
    <div>
      <EditPostModal
        open={open}
        onClose={() => setOpen(false)}
        id={id as number}
        caption={caption}
        tag={tag}
      />
      <BlockModal
        open={blockOpen}
        onClose={() => setBlockOpen(false)}
        user={otherUser as IOtherUser}
        onClick={() => handleBlock(otherUser?.user?.id as number, setBlocks)}
      />
      <BestFriendModal
        open={friendOpen}
        onClose={() => setFriendOpen(false)}
        user={otherUser as IOtherUser}
        onClick={() => {}}
      />
      <div className="mr-[20px] mb-6">
        <div className="w-full flex justify-between">
          <div className="flex">
            <button
              onClick={() => {
                like || likeCount > 0
                  ? handleUnLike(id as number, setLike)
                  : handleLike(id as number, setLike);
                // likeCount++ && window.location.reload();
              }}
            >
              <img
                src={like || likeCount > 0 ? Like : disLike}
                className="w-[24px] h-[24px]"
                alt="like"
              />
            </button>
            <p className="mr-[8px] text-[14px] font-medium text-[#C38F00] my-auto">
              {likeCount}
            </p>
            <button
              onClick={() =>
                isSave || bookmarkCount > 0
                  ? handleUnBookmark(id as number, setIsSave)
                  : handleBookmark(id as number, setIsSave)
              }
              className="mr-[16px]"
            >
              <img
                src={isSave || bookmarkCount > 0 ? Save : disSave}
                className="w-[24px] h-[24px]"
                alt="save"
              />
            </button>
            <p className="mr-[8px] text-[14px] font-medium text-[#C38F00] my-auto">
              {bookmarkCount}
            </p>
          </div>

          {user?.id === author ? (
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
                <p className="text-[#17494D] font-bold text-[10px] w-16">
                  {otherUser?.user?.username}
                </p>
                <p className="text-[#17494D] text-[9px] w-16 ">
                  {otherUser?.user?.followers} دنبال‌کننده
                </p>
              </div>
              <img
                alt="profile"
                src={otherUser?.user?.photo || userImage}
                className="w-10 h-10"
              />
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
