"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../app/globals.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./ss1.png" alt="ss1" className='w-[210px] h-[450px] object-contain mt-12' /></SwiperSlide>
        <SwiperSlide><img src="./ss2.png" alt="ss2" className='w-[210px] h-[450px] object-contain' /></SwiperSlide>
        <SwiperSlide><img src="./ss3.png" alt="ss3" className='w-[210px] h-[450px] object-contain mt-12' /></SwiperSlide>
        <SwiperSlide><img src="./ss4.png" alt="ss4" className='w-[210px] h-[450px] object-contain mb-8' /></SwiperSlide>
        <SwiperSlide><img src="./ss5.png" alt="ss5" className='w-[210px] h-[450px] object-contain mt-16' /></SwiperSlide>
      </Swiper>
    </>
  );
}
