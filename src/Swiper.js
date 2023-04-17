// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          className="slide-image"
          src="https://m.media-amazon.com/images/I/71v3aTg8BML._AC_SL1500_.jpg"
          alt="1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://m.media-amazon.com/images/I/718wAkWOKDL._AC_SL1500_.jpg"
          alt="2"
          className="slide-image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="slide-image"
          src="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_SL1500_.jpg"
          alt="3"
        />
      </SwiperSlide>
      
      ...
    </Swiper>
  );
};
