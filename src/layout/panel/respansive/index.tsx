import { Outlet } from "react-router";
import ResponsiveHeader from "./responsiveHeader";
import ResponsiveFooter from "./responsiveFooter";
import ResponsiveCollege from "./responsiveMyCollegeGram";

export default function RespansiveLayout() {
  return (
    <div className="">
      <ResponsiveHeader />
      <ResponsiveCollege />

      <Outlet />
      <ResponsiveFooter />
    </div>
  );
}
