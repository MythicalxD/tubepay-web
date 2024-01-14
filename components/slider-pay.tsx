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

export default function Slider2() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./g1.png" alt="g1" className='w-[200px] h-[66px] object-contain' /></SwiperSlide>
        <SwiperSlide><img src="./g2.png" alt="g2" className='w-[200px] h-[66px] object-contain' /></SwiperSlide>
        <SwiperSlide><img src="./g3.png" alt="g3" className='w-[200px] h-[66px] object-contain' /></SwiperSlide>
        <SwiperSlide><img src="./g4.png" alt="g4" className='w-[200px] h-[66px] object-contain' /></SwiperSlide>
      </Swiper>
    </>
  );
}
