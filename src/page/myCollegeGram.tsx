import { useEffect, useState } from "react";
import { IImage } from "../api/type/images";
import { get } from "../api";
import { useUser } from "../features/hooks";

import ImageList from "../component/collegians/imageList";
import EmptyMyCollage from "../component/emptyMyCollege";
import SideBar from "../component/sidebar";

export default function MyCollegeGram() {
  const user = useUser();

  const [photoList, setPhotoList] = useState<{
    result: IImage[];
    msg: string;
  }>();

  const url = user?.id === undefined ? null : `/post/user/${user?.id}`;
  useEffect(() => {
    get(url as string)
      .then((d: any) => setPhotoList(d))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex mt-32">
      {photoList?.msg === "پست مورد نظر یافت نشد" ? (
        <EmptyMyCollage />
      ) : (
        <ImageList photoList={photoList?.result || []} />
      )}
      <SideBar />
    </div>
  );
}
