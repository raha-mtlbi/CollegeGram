import { useEffect, useState } from "react";
import { get } from "../../api";
import { ITilmeLine } from "../../api/type/timeLine";
import HomeCardList from "../../component/home/HomeCardList";
import InnerHome from "../../component/home/innerhome";

export default function Home() {
  const [imageList, setImageList] = useState<{
    result: ITilmeLine[];
    total: number;
  }>();

  useEffect(() => {
    get("/post/MyTimeline")
      .then((d: any) => setImageList(d))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className=" px-12">
      <p className=" font-bold text-[18px] mt-3">خانه</p>
      {imageList?.total === 0 ? (
        <InnerHome />
      ) : (
        <HomeCardList imageList={imageList?.result || []} />
      )}
    </div>
  );
}
