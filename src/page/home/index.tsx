import { useEffect, useState } from "react";
import { get } from "../../api";
import { ITilmeLine } from "../../api/type/timeLine";
import HomeCardList from "../../component/home/HomeCardList";
import InnerHome from "../../component/home/innerhome";

export default function Home() {
  const [imageList, setImageList] = useState<{
    result: ITilmeLine[];
    total: number;
    msg: string;
  }>();

  useEffect(() => {
    get("/post/MyTimeline")
      .then((d: any) => setImageList(d))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="px-12 sm:w-screen">
      <p className=" font-bold text-[18px] mt-3">خانه</p>
      {imageList?.msg === "پست مورد نظر یافت نشد" ? (
        <InnerHome />
      ) : (
        <HomeCardList imageList={imageList?.result || []} />
      )}
    </div>
  );
}
