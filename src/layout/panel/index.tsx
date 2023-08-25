import { Outlet } from "react-router";
import Header from "./header";
import ProfileSummery from "./profileSummery";

export default function PanelLayout() {
  return (
    <div className=" px-28 py-10">
      <div className="flex justify-around ">
        <ProfileSummery />
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
