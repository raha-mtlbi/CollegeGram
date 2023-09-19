import { Outlet } from "react-router";
import ResponsiveHeader from "./responsiveHeader";
import ResponsiveFooter from "./responsiveFooter";

export default function RespansiveLayout() {
  return (
    <div className="">
      <ResponsiveHeader />
      <Outlet />
      <ResponsiveFooter />
    </div>
  );
}
