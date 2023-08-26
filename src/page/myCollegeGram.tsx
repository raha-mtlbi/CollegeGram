import Caption from "../component/caption";
import Comment from "../component/comment";
import SideBar from "../component/sidebar";

import image from "../assets/images/imageListSampel.svg";

export default function MyCollegeGram() {
  return (
    <div className="flex mt-32 p-3 ">
      <div className="w-full grid grid-cols-2 gap-4 ">
        <img alt="" src={image} />
        <div className="flex flex-col p-2 ">
          <Caption />
          <Comment />
        </div>
      </div>
      <SideBar />
    </div>
  );
}
