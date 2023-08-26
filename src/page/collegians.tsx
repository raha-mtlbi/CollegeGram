import ImageList from "../component/collegians/imageList";
import EmptyMyCollage from "../component/emptyMyCollege";
import SideBar from "../component/sidebar";

export default function Collegians() {
  const empty = true;

  return (
    <div className="flex mt-32">
      {empty ? <EmptyMyCollage /> : <ImageList />}
      <SideBar />
    </div>
  );
}
