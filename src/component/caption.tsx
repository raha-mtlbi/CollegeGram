import { useState } from "react";

import Tag from "./Tag";
import { useUser } from "../features/hooks";

import Like from "../assets/icons/heart.svg";
import disLike from "../assets/icons/heart-outline.svg";
import Save from "../assets/icons/saved.svg";
import disSave from "../assets/icons/save-outline.svg";
import more from "../assets/icons/ellipsis.svg";
import profile from "../assets/icons/picture frame.svg";
import DetailModal from "./detailOtherUserModal";

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
      <DetailModal open={open} onClose={() => setOpen(false)} />

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

          <button
            type="button"
            // className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-toggle="popover"
            data-te-placement="bottom"
            data-te-content="Bottom popover"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Popover on bottom
          </button>
          {!user && (
            <div className="grid grid-cols-3 gap-1 text-center items-center">
              <button
                type="button"
                id="dropdownMenuButton1"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  alt="more"
                  src={more}
                  className="w-4 h-4 relative -left-10"
                />
              </button>

              <ul
                className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1"
                data-te-dropdown-menu-ref
              >
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Something else here
                  </a>
                  Something else here
                </li>
              </ul>
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
