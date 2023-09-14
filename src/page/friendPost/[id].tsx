import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { get } from "../../api";
import { IImage } from "../../api/type/images";
import { imageUrl } from "../../api/config";

import Caption from "../../component/caption";
import Comment from "../../component/comment";

export default function InnerFriendsPost() {
  const { id } = useParams<{ id: string }>();
  const [photoDetail, setPhotoDetail] = useState<any>();

  useEffect(() => {
    get(`/${id}`)
      .then((d: any) => setPhotoDetail(d))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div>
      <div className="flex mt-32 p-3 ">
        <div className="w-full grid grid-cols-2 gap-4 ">
          <Swiper
            // slidesPerView={1}
            // spaceBetween={1}
            // pagination={true}
            // navigation={true}
            // modules={[Pagination, Navigation]}
          >
            {photoDetail?.map((i: any) => {
              return (
                <SwiperSlide key={i}>
                  <img
                    alt="postImage"
                    src={imageUrl + photoDetail?.photos}
                    className="w-[475px] h-[488px]"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex flex-col p-2 ">
            <Caption
              likeCount={photoDetail?.likesCount || 0}
              bookmarkCount={0}
              date={photoDetail?.createdAt}
              caption={photoDetail?.caption as string}
              tag={photoDetail?.tags as string[]}
              commentsCount={photoDetail?.commentsCount || 0}
            />
            <Comment postId={id as string} />
          </div>
        </div>
      </div>
    </div>
  );
}
