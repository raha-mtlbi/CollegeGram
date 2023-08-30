import ImageList from "../component/collegians/imageList";
import EmptyMyCollage from "../component/emptyMyCollege";
import SideBar from "../component/sidebar";
import { useUser } from "../features/hooks";

export default function MyCollegeGram() {
  const user = useUser();

  return (
    <div className="flex mt-32">
      {(user?.postsCount as number) === 0 ? <EmptyMyCollage /> : <ImageList />}
      <SideBar />
    </div>
  );
}
