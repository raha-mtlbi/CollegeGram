import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IImage } from "../api/type/images";
import { get } from "../api";

import arrow from "../assets/icons/arrow-back1.svg";
import user from "../assets/icons/person.svg";
import dot from "../assets/icons/ellipsis.svg";

export default function Collegians() {
  const navigate = useNavigate();
  const [imageList, setImageList] = useState<{ result: IImage[] }>();

  useEffect(() => {
    get("/user/explore")
      .then((d: any) => setImageList(d))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex flex-col pr-12 ">
      <p className="font-bold text-[22px] mb-10 mt-3"> کالج‌گرامی‌‌ها</p>
      {imageList?.result?.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex">
              <div className="grid grid-cols-4 gap-4">
                {item.photos.map((photo) => {
                  return (
                    <div className="w-[220px] h-[220px] ml-[24px] ">
                      <img
                        src={photo}
                        className="rounded-[24px]"
                        alt="gallery"
                      />
                    </div>
                  );
                })}
              </div>
              <img
                alt="arrow"
                src={arrow}
                className="w-6 h-6 mr-[65px] mt-[105px] cursor-pointer"
                onClick={() => navigate(`/usersProfile/1`)}
              />
            </div>
            {/* paeen */}
            <div className="flex mt-6 mb-9 items-center">
              <div className="bg-white rounded-full w-12 h-12  ml-6">
                <img
                  alt="profile"
                  src={item.user?.photo ? item.user?.photo : user}
                  className="w-8 h-8 mx-auto mt-1"
                />
              </div>
              <div>
                <p className="text-[16px] text-[#C38F00] font-bold">
                  {item?.user.name + " " + item.user.lastname}
                </p>
                <div className="flex">
                  <p className="text-[#17494D] text-[11px] mt-[9px]">
                    {item?.user.followers}
                  </p>
                  <p className="mx-2"> هزار دنبال‌کننده</p>
                </div>
              </div>
              <button onClick={() => {}}>
                <img
                  alt="more"
                  src={dot}
                  className="w-[24px] h-[24px] mr-[30px]"
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
