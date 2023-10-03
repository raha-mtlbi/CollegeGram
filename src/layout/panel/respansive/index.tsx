import { useLocation, useParams } from "react-router-dom";
import { Outlet } from "react-router";
import ResponsiveHeader from "./responsiveHeader";
import ResponsiveFooter from "./responsiveFooter";
import InnerPostHeader from "./innerPostHeader";

export default function RespansiveLayout() {
  const location = useLocation();
  const { id } = useParams();
  return (
    <div className="bg-[#F3F0EE] w-[375px] h-[1024px]">
      {location?.pathname === `/myCollegeGram/${id}` ||
      location?.pathname === `/friendPost/${id}` ? (
        <InnerPostHeader />
      ) : (
        <ResponsiveHeader />
      )}

      <Outlet />
      <ResponsiveFooter />
    </div>
  );
}
