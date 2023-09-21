import ResponsiveHeader from "../panel/responsiveHeader";
import ResponsiveFooter from "../panel/responsiveFooter";
import ResponsiveCollege from "../panel/responsiveMyCollegeGram";
import { Provider } from "react-redux";
import store from "../../store";

export default function Responsive() {
  return (
    <div>
      <Provider store={store}>
        <div className="bg-[#F3F0EE] w-[375px] h-[1024px]">
          <ResponsiveHeader />
          <ResponsiveCollege />
          <ResponsiveFooter />
        </div>
      </Provider>
    </div>
  );
}
