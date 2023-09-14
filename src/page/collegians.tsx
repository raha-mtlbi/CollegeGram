import { useNavigate } from "react-router-dom";

import arrow from "../assets/icons/arrow-back1.svg";
import user from "../assets/icons/person.svg";
import dot from "../assets/icons/ellipsis.svg";
import photo from "../assets/images/sampleHomeCard.svg";

const data = [
  {
    name: "یاسین اروسخانی",
    followers: "10 هزار دنبال‌کننده",
    profile: "",
    photoList: [photo, photo, photo, photo],
  },
  {
    name: "متین دهقان",
    followers: "10 هزار دنبال‌کننده",
    profile: "",
    photoList: [photo, photo, photo, photo],
  },
  {
    name: "یاسین",
    followers: "دقیقه پیش",
    profile: "",
    photoList: [photo, photo, photo, photo],
  },
];

export default function Collegians() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pr-12 ">
      <p className="font-bold text-md mb-7"> کالج‌گرامی‌‌ها</p>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex">
              <div className="grid grid-cols-4 gap-4">
                {item.photoList.map((photo) => {
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
            <div className="flex mt-6 mb-8 items-center">
              <div className="bg-white rounded-full w-12 h-12  ml-6">
                <img
                  alt="profile"
                  src={item.profile ? item.profile : user}
                  className="w-10 h-10 mx-auto"
                />
              </div>
              <div>
                <p className="text-[16px] text-[#C38F00] font-bold">
                  {item.name}
                </p>
                <p className="text-[#17494D] text-[11px] mt-[9px]">
                  {item.followers}
                </p>
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
