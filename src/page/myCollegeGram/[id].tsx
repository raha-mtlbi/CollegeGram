import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

import { get } from "../../api";
import { IImage } from "../../api/type/images";

import Caption from "../../component/caption";
import Comment from "../../component/comment";
import SideBar from "../../component/sidebar";
import ImageSlider from "../../component/imageSlider";

export default function InnerPost() {
  const { id } = useParams<{ id: any }>();
  const phone = useMediaQuery("only screen and (max-width : 600px)");

  const [photoDetail, setPhotoDetail] = useState<IImage[] | any>();

  useEffect(() => {
    get(`/post/${id}`)
      .then((d: any) => setPhotoDetail(d))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div>
      <div className="flex md:mt-0 mt-32 p-3 ">
        <div className="w-full md:grid-cols-1 grid grid-cols-2 gap-4 ">
          <ImageSlider photoDetail={photoDetail} />

          <div className="flex flex-col p-2 md:w-screen ">
            <Caption
              date={photoDetail?.createdAt}
              caption={photoDetail?.caption as string}
              tag={photoDetail?.tags as string[]}
              commentsCount={photoDetail?.commentsCount || 0}
              id={id as number}
              author={photoDetail?.author || 1}
              closeFriend={photoDetail?.closeFriend}
            />
            <Comment postId={id as number} />
          </div>
        </div>
        {!phone && <SideBar />}
      </div>
    </div>
  );
}
