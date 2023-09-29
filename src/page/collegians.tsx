import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { get } from "../api";
import { ICollegians } from "../api/type/collegians";
import { imageUrl } from "../api/config";

import arrow from "../assets/icons/arrow-back1.svg";
import user from "../assets/icons/person.svg";
import dot from "../assets/icons/ellipsis.svg";
import sample from "../assets/images/imageListSampel.svg";

export default function Collegians() {
  const navigate = useNavigate();
  const [imageList, setImageList] = useState<ICollegians[] | any>();

  useEffect(() => {
    get("/post/explore")
      .then((d: any) => setImageList(d))
      .catch((e) => console.log(e));
  }, []);

  console.log(
    "i",
    imageList?.map((i: any) => i?.posts?.map((x: any) => x?.photo))
  );

  return (
    <div className="flex flex-col pr-12 ">
      <p className="font-bold text-[18px] mb-10 mt-3"> کالج‌گرامی‌‌ها</p>
      {imageList?.map((item: any, index: number) => {
        return (
          <div>
            {item?.posts?.[0]?.photos.length >= 1 && (
              <div key={index}>
                <div className="flex">
                  <div className="grid grid-cols-4 gap-4">
                    {item?.posts?.[0]?.photos?.slice(0, 4).map((photo: any) => {
                      return (
                        <div className="w-[220px] h-[220px] ml-[24px] ">
                          <img
                            src={imageUrl + photo || sample}
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
                    onClick={() => navigate(`/usersProfile/${item?.user?.id}`)}
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
                      {item?.user?.username}
                    </p>
                    <div className="flex items-center mt-[9px]">
                      <p className="text-[#17494D] text-[11px]">
                        {item?.user.followers}
                      </p>
                      <p className="mx-2 text-[#17494D]  text-[11px]">
                        دنبال‌کننده
                      </p>
                    </div>
                  </div>
                  <button onClick={() => {}}>
                    <img
                      alt="more"
                      src={dot}
                      className="w-[24px] h-[24px] mr-[30px]"
                      onClick={() => navigate(`/`)}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
