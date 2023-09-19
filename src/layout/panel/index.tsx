import { Outlet } from "react-router";
import Header from "./header";
import ProfileSummery from "./profileSummery";
import Navigation from "./navigationPanel";

import tree from "../../assets/images/loginTree.svg";

export default function PanelLayout() {

  return (
    <div className=" px-28 py-10">
      <div className="flex justify-around ">
        <div className="flex flex-col">
          <ProfileSummery />
          <Navigation />
          <img
            alt="tree"
            src={tree}
            className="w-[190px] h-[220px] mt-[60px]"
          />
        </div>
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
