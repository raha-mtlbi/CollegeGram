import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./input";

import search from "../assets/icons/search.svg";

export default function Search() {
  const [tag, setTag] = useState("");
  const navigate = useNavigate();
  console.log("tag", tag);

  return (
    <div className="w-[300px]">
      <Input
        placeholder={"جستجو"}
        prefix={
          <button onClick={() => setTag("")}>
            <img
              src={search}
              alt="key"
              className="absolute -mt-1 pr-2 cursor-pointer"
              onClick={() => (tag ? navigate(`/searchPage/${tag}`) : null)}
            />
          </button>
        }
        value={tag || ""}
        onChange={(e: any) => setTag(e.target.value)}
      />
    </div>
  );
}
