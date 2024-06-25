"use client";
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
  section
}: {
  section: string
  products: QueryResultRow[];
}) {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={true}
        spaceBetween={8}
        slidesPerView={4}
      >
        {products.map((product, index) => {
          return (
            <div key={`${product.name}-${section}-${index}`}>
              <SwiperSlide>
                <ProductCard
                  name={product.name}
                  price={getDecimal(product.price, product.discount)}
                  img={`/fruits/${product.name.toLowerCase().replace(' ', '-')}.jpg`}
                  rating={product.rating}
                  originalPrice={getDecimal(product.price)}
                  href={`/store/${product.name.toLowerCase()}`}
                />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
}
