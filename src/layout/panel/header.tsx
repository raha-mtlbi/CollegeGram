import { useState } from "react";
import Button from "../../component/button";
import Input from "../../component/input";
import CreatePostModal from "../../component/createPost";

import logo from "../../assets/images/logo.svg";
import search from "../../assets/icons/search.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <CreatePostModal open={open} onClose={() => setOpen(false)} />

      <div className="w-[65vw] h-[40px] flex justify-between items-center mb-[30px] mr-12">
        <Input
          placeholder={"جستجو"}
          postfix={
            <img src={search} alt="key" className="absolute mt-3 px-2" />
          }
        />
        <div className="flex justify-around items-center ">
          <Button
            title={"افزودن عکس"}
            onClick={() => setOpen(true)}
          />
          <img alt="logo" src={logo} className="w-[60px] mr-[30px]" />
        </div>
      </div>
    </div>
  );
}
