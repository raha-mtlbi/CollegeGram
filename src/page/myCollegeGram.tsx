import { useUser } from "../features/hooks";

import ImageList from "../component/collegians/imageList";
import EmptyMyCollage from "../component/emptyMyCollege";
import SideBar from "../component/sidebar";

export default function MyCollegeGram() {
  const user = useUser();

  return (
    <div className="flex mt-32">
      {(user?.postsCount as number) === 1 ? <EmptyMyCollage /> : <ImageList />}
      <SideBar />
    </div>
  );
}
