import { useUser } from "../../../features/hooks";
import { imageUrl } from "../../../api/config";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import Button from "../../../component/button";

import arrow from "../../../assets/icons/arrow-down.svg";
import person from "../../../assets/icons/person.svg";
import dot from "../../../assets/icons/ellipsis.svg";

const ResponsiveProfile = () => {
  const user = useUser();

  return (
    <div>
      <div className="flex items-center">
        <div className="rounded-full w-12 h-12 bg-[#F3F0EE] border mt-12 border-[#CDCDCD] mr-7">
          {user?.photo ? (
            <img
              alt="profile"
              src={imageUrl + user?.photo}
              className="w-12 h-12 object-fill rounded-full"
            />
          ) : (
            <img src={person} className="w-8 mx-auto mt-2" alt="person" />
          )}
        </div>

        <div className="mr-5 mt-12">
          <p className="text-[#17494D] text-[16px] font-bold mb-2">
            {user?.name + " " + user?.lastname || "No_Name"}
          </p>

          <p className="flex text-[#C19008] text-[14px] not-italic">
            {user?.username && (
              <Popover placement="bottom">
                <PopoverHandler>
                  <button>
                    <img
                      src={arrow}
                      className="sm:ml-4 sm:mr-0 mr-4 w-2"
                      alt="arrow"
                    />
                  </button>
                </PopoverHandler>
                <PopoverContent className="w-[150px] text-right m-3 border-gray-400">
                  <ul>
                    <li className=" cursor-pointer mr-2">{user?.username}</li>
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

        <div className=" fixed left-3">
          <img
            alt="more"
            src={dot}
            className="w-6 mt-12 cursor-pointer"
            onClick={() => {}}
          />
        </div>
      </div>

      <div className="flex text-[14px] text-[#17494D] mr-12 mt-4">
        <p className="ml-1">{user?.followers || 0}</p>
        <p className="ml-[10px]">دنبال‌کننده </p>
        <p>|</p>
        <p className="mr-2">{user?.following || 0}</p>
        <p className="mr-1"> دنبال‌شونده</p>
      </div>

      <div className="w-screen flex justify-end pl-4">
        <Button title={"ویرایش پروفایل"} width={"150px"} />
      </div>
    </div>
  );
};

export default ResponsiveProfile;
