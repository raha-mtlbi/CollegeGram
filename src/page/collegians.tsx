import SideBar from "../component/sidebar";
import arrow from "../assets/icons/arrow-back.svg";
import user from "../assets/icons/person.svg";
import dot from "../assets/icons/ellipsis.svg";

export default function Collegians() {
  const data = [
    {
      name: "یاسین",
      followers: "دقیقه پیش",
      profile: "",
      photoList: [arrow, arrow, arrow, arrow],
    },
    {
      name: "یاسین",
      followers: "دقیقه پیش",
      profile: "",
      photoList: [arrow, arrow, arrow, arrow],
    },
    {
      name: "یاسین",
      followers: "دقیقه پیش",
      profile: "",
      photoList: [arrow, arrow, arrow, arrow],
    },
  ];
  return (
    <div className="flex flex-col justify-end mt-32">
      <p></p>
      {data.map((item) => {
        return (
          <div>
            <div className="flex">
              {item.photoList.map((photo) => {
                return (
                  <div className="">
                    <img src={photo}></img>
                  </div>
                );
              })}
              <img src={arrow} />
            </div>
            {/* paeen */}
            <div className="flex">
              <div className="rounded-full w-[20px] h-[20px]">
                <img
                  alt="profile"
                  src={item.profile ? item.profile : user}
                  className="w-[40px] h-[40px]"
                ></img>
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.followers}</p>
              </div>
              <img src={dot} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
