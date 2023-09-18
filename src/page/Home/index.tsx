import { useEffect, useState } from "react";
import { IImage } from "../../api/type/images";
import { get } from "../../api";
import HomeCardList from "../../component/home/HomeCardList";
import InnerHome from "../../component/home/innerhome";

export default function Home() {
  const [imageList, setImageList] = useState<{ result: IImage[] }>();

  useEffect(() => {
    get("/post/explore")
      .then((d: any) => setImageList(d))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className=" px-12">
      <p className=" font-bold text-[18px]">خانه</p>
      {imageList?.result.length === 0 ? (
        <InnerHome />
      ) : (
        <HomeCardList imageList={imageList?.result || []} />
      )}
    </div>
  );
}
