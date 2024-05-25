'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

export default function Swipe() {
  return (
    <section className="w-11/12 m-auto mt-2 mb-12 lg:hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Image
            className="w-full rounded-2xl"
            src={"/mobile-slide-1.jpg"}
            alt="freshy season banner"
            width={1000}
            height={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full rounded-2xl"
            src={"/mobile-slide-2.jpg"}
            alt="freshy season banner"
            width={1000}
            height={1000}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
