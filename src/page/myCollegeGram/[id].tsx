import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { get } from "../../api";
import { IImage } from "../../api/type/images";

import Caption from "../../component/caption";
import Comment from "../../component/comment";
import SideBar from "../../component/sidebar";

export default function InnerPost() {
  const { id } = useParams<{ id: string }>();
  const [photoDetail, setPhotoDetail] = useState<IImage>();

  useEffect(() => {
    get(`//${id}`)
      .then((d: any) => setPhotoDetail(d))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div>
      <div className="flex mt-32 p-3 ">
        <div className="w-full grid grid-cols-2 gap-4 ">
          <img
            alt="postImage"
            src={photoDetail?.src}
            className="w-[488px] h-[488px]"
          />
          <div className="flex flex-col p-2 ">
            <Caption likeCount={0} bookmarkCount={0} date={0} captionText={""} tag={[]} />
            <Comment />
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
}