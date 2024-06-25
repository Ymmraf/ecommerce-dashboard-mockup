"use client";
import { ProductInfoForCard } from "@/type";
import ProductCard from "../ProductCard";
import { getDecimal } from "@/app/utils/getDecimal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperPanel.css"
import { QueryResultRow } from "@vercel/postgres";

export default function SwiperPanel({
  products,
}: {
  products: QueryResultRow[];
}) {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        // navigation={true}
        pagination={true}
        spaceBetween={8}
        slidesPerView={4}
        // slidesOffsetAfter={50}
        // slidesOffsetBefore={50}
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide>
              <ProductCard
                key={index}
                name={product.name}
                price={getDecimal(product.price, product.discount)}
                img={`/fruits/${product.name.toLowerCase().replace(' ', '-')}.jpg`}
                rating={product.rating}
                originalPrice={getDecimal(product.price)}
                href={`/store/${product.name.toLowerCase()}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
