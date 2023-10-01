import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import edit from "../../../assets/icons/edit.svg";
import back from "../../../assets/icons/arrow-left.svg";
import EditProfile from "../../../component/editProfileModal";

export default function InnerPostHeader() {
  const navigate = useNavigate();
  const [open, setOpne] = useState(false);
  return (
    <div>
      <EditProfile open={open} onClose={() => setOpne(false)} />

      <div className=" w-screen h-24 flex items-center bg-[#F1EBE3] border border-[#CDCDCD]  justify-between">
        <img
          alt="edit"
          src={edit}
          className="w-6 h-6 mx-3 mt-1 object-fill rounded-full "
          onClick={() => setOpne(true)}
        />
        <img
          alt="back"
          src={back}
          className="w-6 h-6 mx-3 mt-1 object-fill rounded-full "
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
}
