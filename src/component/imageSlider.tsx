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
    <div className="md:w-full ">
      <div
        className="swiper-container "
        style={{ height: "0", paddingBottom: "100%" }} // Create a square aspect ratio of 1:1
      >
        <Swiper
          slidesPerView={1}
          pagination={true}
          navigation={true}
          spaceBetween={0}
          modules={[Pagination, Navigation]}>
          {photoDetail?.photos?.map((i: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <img
                  alt="postImage"
                  src={i || sample}
                  className="w-full h-full rounded-r-md z-0 object-cover"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
