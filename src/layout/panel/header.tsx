import { useState } from "react";
import Button from "../../component/button";
import CreatePostModal from "../../component/createPost";
import Search from "../../component/search";

import logo from "../../assets/images/logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <CreatePostModal open={open} onClose={() => setOpen(false)} />

      <div className="w-[65vw] h-[40px] flex justify-between items-center mb-[30px] mr-12">
        <Search />
        <div className="flex justify-around items-center ">
          <Button title={"افزودن عکس"} onClick={() => setOpen(true)} />
          <img alt="logo" src={logo} className="w-[60px] mr-[30px]" />
        </div>
      </div>
    </div>
  );
}
