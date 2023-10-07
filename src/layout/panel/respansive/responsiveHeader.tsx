import { useUser } from "../../../features/hooks";
import Search from "../../../component/search";

import profile from "../../../assets/icons/person.svg";

export default function ResponsiveHeader() {
  const user = useUser();

  return (
    <div className=" w-screen h-24 flex items-center bg-[#F1EBE3] border border-[#CDCDCD]">
      <div className="rounded-full w-14 h-14 bg-[#F3F0EE] ml-3 border border-[#CDCDCD] mr-7">
        <img
          alt="profile"
          src={user ? user?.photo : profile}
          className="w-12 h-12 mx-auto mt-1 object-fill rounded-full "
        />
      </div>
      <Search />
    </div>
  );
}
