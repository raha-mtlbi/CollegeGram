import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
// import Swiper and modules styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { IImage } from "../api/type/images"

import sample from "../assets/images/imageListSampel.svg"

export default function ImageSlider({
  photoDetail,
}: {
  photoDetail: IImage[] | any
}) {
  return (
    <div className="md:w-full z-0">
      <Swiper
        slidesPerView={1}
        pagination={true}
        navigation={true}
        // width={100}
        // height={488}
        spaceBetween={0}
        modules={[Pagination, Navigation]}>
        {photoDetail?.photos?.map((i: any) => {
          return (
            <SwiperSlide key={i}>
              <img
                alt="postImage"
                src={i || sample}
                className="w-full h-[350px] rounded-r-md z-0 object-cover"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
