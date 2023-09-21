import { Outlet } from "react-router";
import ResponsiveHeader from "./responsiveHeader";
import ResponsiveFooter from "./responsiveFooter";

export default function RespansiveLayout() {
  return (
    <div className="bg-[#F3F0EE] w-[375px] h-[1024px]">
      <ResponsiveHeader />
      <Outlet />
      <ResponsiveFooter />
    </div>
  );
}
