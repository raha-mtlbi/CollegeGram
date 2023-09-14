import ResponsiveHeader from "../panel/responsiveHeader";
import ResponsiveFooter from "../panel/responsiveFooter";

export default function Responsive() {
  return (
    <div className="bg-[#F3F0EE] w-[375px] h-[1024px]">
      <ResponsiveHeader />
      <ResponsiveFooter />
    </div>
  );
}
