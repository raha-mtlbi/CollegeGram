import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { get } from "../../api";
import { IImage } from "../../api/type/images";

import Caption from "../../component/caption";
import Comment from "../../component/comment";
import ImageSlider from "../../component/imageSlider";

export default function InnerFriendsPost() {
  const { id } = useParams<{ id: any }>();
  const [photoDetail, setPhotoDetail] = useState<IImage[] | any>();

  useEffect(() => {
    get(`/post/${id}`)
      .then((d: any) => setPhotoDetail(d))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div>
      <div className="flex mt-32 p-3 ">
        <div className="w-full grid grid-cols-2 gap-4 ">
          <ImageSlider photoDetail={photoDetail} />

          <div className="flex flex-col p-2 ">
            <Caption
              likeCount={photoDetail?.likeCount || 0}
              bookmarkCount={photoDetail?.bookmarkCount || 0}
              date={photoDetail?.createdAt}
              caption={photoDetail?.caption as string}
              tag={photoDetail?.tags as string[]}
              commentsCount={photoDetail?.commentsCount || 0}
              id={id as number}
            />
            <Comment postId={id as number} />
          </div>
        </div>
      </div>
    </div>
  );
}
