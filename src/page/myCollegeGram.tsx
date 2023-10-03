import { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

import { IImage } from "../api/type/images";
import { get } from "../api";
import { useUser } from "../features/hooks";
import ResponsiveProfile from "../layout/panel/respansive/responsiveMyProfile";

import ImageList from "../component/collegians/imageList";
import EmptyMyCollage from "../component/emptyMyCollege";
import SideBar from "../component/sidebar";

export default function MyCollegeGram() {
  const phone = useMediaQuery("only screen and (max-width : 600px)");
  const user = useUser();

  const [photoList, setPhotoList] = useState<{
    result: IImage[];
    msg: string;
  }>();

  useEffect(() => {
    get(user?.id ? `/post/MyPosts` : undefined)
      .then((d: any) => setPhotoList(d))
      .catch((e) => console.log(e));
  }, [user?.id]);

  return (
    <div className="sm:flex-col flex sm:mt-2 mt-32">
      {phone && <ResponsiveProfile />}
      {photoList?.msg === "پست مورد نظر یافت نشد" ? (
        <EmptyMyCollage />
      ) : (
        <ImageList photoList={photoList?.result || []} />
      )}
      {!phone && <SideBar />}
    </div>
  );
}
