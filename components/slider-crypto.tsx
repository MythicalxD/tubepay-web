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

export default function Slider1() {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./c1.png" alt="c1" className='w-[80px] h-[80px] object-contain' /></SwiperSlide>
        <SwiperSlide><img src="./c2.png" alt="c2" className='w-[80px] h-[80px] object-contain' /></SwiperSlide>
        <SwiperSlide><img src="./c3.png" alt="c3" className='w-[80px] h-[80px] object-contain' /></SwiperSlide>
        <SwiperSlide><img src="./c4.png" alt="c4" className='w-[80px] h-[80px] object-contain' /></SwiperSlide>
        <SwiperSlide><img src="./c5.png" alt="c5" className='w-[80px] h-[80px] object-contain' /></SwiperSlide>
        <SwiperSlide><img src="./c6.png" alt="c6" className='w-[80px] h-[80px] object-contain' /></SwiperSlide>
        <SwiperSlide><img src="./c7.png" alt="c7" className='w-[80px] h-[80px] object-contain' /></SwiperSlide>
        <SwiperSlide><img src="./c7.png" alt="c8" className='w-[80px] h-[80px] object-contain' /></SwiperSlide>
      </Swiper>
    </>
  );
}
