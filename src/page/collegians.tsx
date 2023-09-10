import SideBar from "../component/sidebar";
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
    followers: "1۷0 هزار دنبال‌کننده",
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
  return (
    <div className="flex flex-col justify-end mt-32">
      <p></p>
      {data.map((item) => {
        return (
          <div>
            <div className="flex">
              {item.photoList.map((photo) => {
                return (
                  <div className="w-[232px] h-[232px] ml-[24px] ">
                    <img src={photo} className="rounded-[24px]"></img>
                  </div>
                );
              })}
              <img
                src={arrow}
                className="w-[24px] h-[24px] mr-[65px] mt-[105px]"
              />
            </div>
            {/* paeen */}
            <div className="flex mt-[24px]">
              <div className="rounded-full w-[64px] h-[64px] ml-[20px]">
                <img
                  alt="profile"
                  src={item.profile ? item.profile : user}
                  className="w-[40px] h-[40px]"
                ></img>
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
                <img src={dot} className="w-[24px] h-[24px] mr-[30px]" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
