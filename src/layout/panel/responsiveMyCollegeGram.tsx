import { useUser } from "../../features/hooks";
import { imageUrl } from "../../api/config";

import person from "../../assets/icons/person.svg";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import arrow from "../../assets/icons/arrow-down.svg";

const ResponsiveCollege = () => {
  const user = useUser();
  return (
    // profile
    <div className="flex">
      <div className="rounded-full w-14 h-14 bg-[#F3F0EE] border mt-12 border-[#CDCDCD] mr-7">
        {user?.photo ? (
          <img alt="profile" src={imageUrl + user?.photo} />
        ) : (
          <img src={person} className="w-10 mx-auto mt-1" />
        )}
      </div>

      {/* username */}
      <div className="flex">
        {user?.username && (
          <Popover placement="bottom">
            <PopoverHandler>
              <Button>
                <img src={arrow} className="my-auto mx-[10px]" alt="arrow" />
              </Button>
            </PopoverHandler>
            <PopoverContent className="w-[150px] text-right m-3 border-gray-400">
              <ul>
                <li className=" cursor-pointer mr-2 text-[#587052] font-bold text-[16px]">
                  {user.username}
                  {"مهشید منزه"}
                </li>
                <li className="  cursor-pointer mr-2  text-[#C19008] text-[14px] my-2">
                  {user.username}
                  {"@mahmz"}
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        )}
        {user?.username || ""}
        <p className="text-[#17494D] text-center text-[20px] font-bold  mt-1">
          {user?.name + "" + user?.lastname || ""}
        </p>
      </div>
    </div>
  );
};

export default ResponsiveCollege;
