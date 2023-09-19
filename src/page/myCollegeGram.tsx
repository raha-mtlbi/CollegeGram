import { useEffect, useState } from "react";
import { IImage } from "../api/type/images";
import { get } from "../api";
import { useUser } from "../features/hooks";

import ImageList from "../component/collegians/imageList";
import EmptyMyCollage from "../component/emptyMyCollege";
import SideBar from "../component/sidebar";

export default function MyCollegeGram() {
  const user = useUser();

  const [photoList, setPhotoList] = useState<{ result: IImage[] }>();
  console.log("pe", photoList?.result);
  useEffect(() => {
    get(`/post/user/${user?.id}`)
      .then((d: any) => setPhotoList(d))
      .catch((e) => console.log(e));
  }, [user?.id]);

  return (
    <div className="flex mt-32">
      {photoList?.result.length === 0 ? (
        <EmptyMyCollage />
      ) : (
        <ImageList photoList={photoList?.result || []} />
      )}
      {/* <SideBar /> */}
    </div>
  );
}
