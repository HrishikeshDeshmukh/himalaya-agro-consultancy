import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import apple from "../assets/apple.png"
import banana from "../assets/banana.png"

const SwiperSlider = () => {
  return (
    <>
      <style>
        {`
          .swiper {
            width: 100%;
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 300px;
            height: 300px;
          }

          .swiper-slide img {
            display: block;
            width: 300px;
            height: 300px;
          }

       
        `}
      </style>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={apple}
            alt="nature-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banana}
            alt="nature-2"
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="nature-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="nature-4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="nature-5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt="nature-6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt="nature-7"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="nature-8"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            alt="nature-9"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
