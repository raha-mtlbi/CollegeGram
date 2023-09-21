import { useNavigate } from "react-router-dom";
import Input from "../../component/input";

import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/person.svg";

export default function ResponsiveHeader() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-24 flex items-center bg-[#F1EBE3] border border-[#CDCDCD]">
      <div className="rounded-full w-14 h-14 bg-[#F3F0EE] ml-3 border border-[#CDCDCD] mr-7">
        <button className=" mx-3" onClick={() => navigate(`/myCollegeGram`)}>
          <img alt="profile" src={user} className="w-8 h-8 mt-2" />
        </button>
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
