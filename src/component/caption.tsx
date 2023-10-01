import { useEffect, useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { Bookmark, LikePost, UnBookmark, UnLikePost } from "../api/post";
import { toast } from "react-toastify";
import { IImage } from "../api/type/images";

import Tag from "./Tag";
import { useUser } from "../features/hooks";
import EditPostModal from "./editpostModal";

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
import { blockUser } from "../api/otherUser";

interface ICaption {
  commentsCount: number;
  date: any;
  caption: string;
  tag: string[];
  id?: number;
  author: number;
  closeFriend: boolean;
}

const Caption = ({
  commentsCount,
  date,
  caption,
  tag,
  id,
  author,
  closeFriend,
}: ICaption) => {
  const user = useUser();

  const [otherUser, setOtherUser] = useState<IOtherUser>();
  const [open, setOpen] = useState<boolean>(false);
  const [blockOpen, setBlockOpen] = useState<boolean>(false);
  const [friendOpen, setFriendOpen] = useState<boolean>(false);

  const [photoDetail, setPhotoDetail] = useState<IImage[] | any>();

  console.log("t", otherUser?.user?.id);
  useEffect(() => {
    get(`/post/${id}`)
      .then((d: any) => setPhotoDetail(d))
      .catch((e) => console.log(e));
  }, [id]);

  const handleLike = async (id: number) => {
    try {
      const response = await LikePost(id);
      const data = await get(`/post/${id}`);
      setPhotoDetail(data);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnLike = async (id: number) => {
    try {
      const response = await UnLikePost(id);
      const data = await get(`/post/${id}`);
      setPhotoDetail(data);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBookmark = async (id: number) => {
    try {
      const response = await Bookmark(id);
      const data = await get(`/post/${id}`);
      setPhotoDetail(data);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnBookmark = async (id: number) => {
    try {
      const response = await UnBookmark(id);
      const data = await get(`/post/${id}`);
      setPhotoDetail(data);
      toast.success(response.msg);
    } catch (error) {
      console.log(error);
    }
  };

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
        closeFriend={closeFriend}
      />
      <BlockModal
        open={blockOpen}
        onClose={() => setBlockOpen(false)}
        user={otherUser as IOtherUser}
        // onClick={() => handleBlock(otherUser?.user?.id as number)}
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
                photoDetail?.ifLiked
                  ? handleUnLike(id as number)
                  : handleLike(id as number);
              }}
            >
              <img
                src={photoDetail?.ifLiked ? Like : disLike}
                className="w-[24px] h-[24px]"
                alt="like"
              />
            </button>
            <p className="mr-[8px] text-[14px] font-medium text-[#C38F00] my-auto">
              {photoDetail?.likeCount}
            </p>
            <button
              onClick={() =>
                photoDetail?.ifBookmarked
                  ? handleUnBookmark(id as number)
                  : handleBookmark(id as number)
              }
              className="mr-[16px]"
            >
              <img
                src={photoDetail?.ifBookmarked ? Save : disSave}
                className="w-[24px] h-[24px]"
                alt="save"
              />
            </button>
            <p className="mr-[8px] text-[14px] font-medium text-[#C38F00] my-auto">
              {photoDetail?.bookmarkCount}
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
                    <li
                      className=" cursor-pointer mr-2"
                      onClick={() => setBlockOpen(true)}
                    >
                      بلاک کردن کاربر
                    </li>
                    <li
                      className="  cursor-pointer mr-2 my-2"
                      onClick={() => setFriendOpen(true)}
                    >
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
                className="bg-white rounded-full w-10 h-10"
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
