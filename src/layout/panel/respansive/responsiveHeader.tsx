import Input from "../../../component/input";
import { useUser } from "../../../features/hooks";
import { imageUrl } from "../../../api/config";

import search from "../../../assets/icons/search.svg";
import profile from "../../../assets/icons/person.svg";

export default function ResponsiveHeader() {
  const user = useUser();

  return (
    <div className="w-full h-24 flex items-center bg-[#F1EBE3] border border-[#CDCDCD]">
      <div className="rounded-full w-14 h-14 bg-[#F3F0EE] ml-3 border border-[#CDCDCD] mr-7">
        <img
          alt="profile"
          src={user ? imageUrl + user?.photo : profile}
          className="w-8 h-8 mx-auto mt-2"
        />
      </div>
      <Input
        placeholder={"جستجو"}
        imageSrc={search}
        imageAlt={"search"}
        width="248px"
      />
    </div>
  );
}
