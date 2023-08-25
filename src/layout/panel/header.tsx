import Button from "../../component/button";
import Input from "../../component/input";

import logo from "../../assets/images/logo.svg";
import search from "../../assets/icons/search.svg";

export default function Header() {
  return (
    <div className="w-[900px] h-[40px] flex justify-between items-center mb-[30px] ">
      <Input placeholder={"جستجو"} imageSrc={search} imageAlt={"search"} />
      <div className="flex justify-around items-center ">
        <Button title={"افزودن عکس"} width={"100px"} onClick={() => {}} />
        <img alt="logo" src={logo} className="w-[60px] mr-[30px]" />
      </div>
    </div>
  );
}
