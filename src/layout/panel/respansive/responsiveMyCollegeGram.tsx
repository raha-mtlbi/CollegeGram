import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../../api/index";
import { IImage } from "../../../api/type/images";
import { useUser } from "../../../features/hooks";
import { imageUrl } from "../../../api/config";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import EmptyMyCollage from "../../../component/emptyMyCollege";

import arrow from "../../../assets/icons/arrow-down.svg";
import person from "../../../assets/icons/person.svg";
import dot from "../../../assets/icons/ellipsis.svg";

const ResponsiveCollege = () => {
  const user = useUser();
  const navigate = useNavigate();

  const [photoList, setPhotoList] = useState<{ result: IImage[] }>();

  useEffect(() => {
    get(`/post/user/${user?.id}`)
      .then((d: any) => setPhotoList(d))
      .catch((e) => console.log(e));
  }, [user?.id]);

  return (
    <div>
      <div className="flex">
        <div className="rounded-full w-14 h-14 bg-[#F3F0EE] border mt-12 border-[#CDCDCD] mr-7">
          {user?.photo ? (
            <img alt="profile" src={imageUrl + user?.photo} />
          ) : (
            <img src={person} className="w-8 mx-auto mt-2" alt="person" />
          )}
        </div>

        <div className="mr-5 mt-12">
          <p className="text-[#17494D] text-[16px] font-bold mb-2">
            {user?.name + "" + user?.lastname || ""}
          </p>

          <p className="flex text-[#C19008] text-[14px] not-italic">
            {user?.username && (
              <Popover placement="bottom">
                <PopoverHandler>
                  <Button>
                    <img src={arrow} className="mr-4 w-2" alt="arrow" />
                  </Button>
                </PopoverHandler>
                <PopoverContent className="w-[150px] text-right m-3 border-gray-400">
                  <ul>
                    <li className=" cursor-pointer mr-2">{user.username}</li>
                    <li className="  cursor-pointer mr-2 my-2">
                      {user.username}
                    </li>
                  </ul>
                </PopoverContent>
              </Popover>
            )}
            {user?.username || ""}
          </p>
        </div>

        <button onClick={() => {}}>
          <img alt="more" src={dot} className="w-6 mr-36 mt-12" />
        </button>
      </div>

      <div className="flex text-[14px] text-[#17494D] mr-12 mt-4">
        <p className="ml-1">{user?.followers || 0}</p>
        <p className="ml-[10px]">دنبال‌کننده </p>
        <p>|</p>
        <p className="mr-2">{user?.following || 0}</p>
        <p className="mr-1"> دنبال‌شونده</p>
      </div>

      <button className="text-white bg-[#C19008] rounded-3xl px-3 py-2 items-center text-centesr text-[14px] w-40 font-semibold leading-normal not-italic mr-44 mt-6">
        ویرایش پروفایل
      </button>

      <div className="flex mt-12">
        {photoList?.result.length === 0 ? (
          <EmptyMyCollage />
        ) : (
          <div className="w-full grid grid-cols-2 gap-2 mr-12 ml-5">
            {photoList?.result.map((photo: any) => (
              <img
                className="w-[152px] h-[165px] cursor-pointer rounded-t-3xl"
                src={imageUrl + photo.photos[0]}
                alt="postImage"
                onClick={() => navigate(`/myCollegeGram/${photo.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveCollege;
