'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { getDecimal } from "../../utils/getDecimal";
import ProductCard from "../ProductCard";
import { ProductCardSkeleton } from "../Skeleton";
import { Suspense } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Discount({discount} : {discount: any[]}) {
  return (
    <section className="w-11/12 m-auto">
      <div className="flex gap-x-3 mb-6">
        <FontAwesomeIcon className="text-coal text-3xl" icon={faPercent} />
        <h2 className="text-coal font-semibold text-2xl">Discounted goods</h2>
      </div>
      <Suspense fallback={<ProductCardSkeleton />}>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-4">
          {discount.slice(0, 4).map((product, index) => {
            return (
              <ProductCard
                key={index}
                name={product.name}
                price={getDecimal(product.price, product.discount)}
                img={product.img}
                rating={product.rating}
                originalPrice={getDecimal(product.price)}
                href={product.href}
              />
            );
          })}
        </div>
      </Suspense>
      <div className="mt-4">
        <Link href="/store" className="text-coal text-lg hover:underline">
          <p className="text-center px-4 py-2 lg:hidden">View all &gt;</p>
        </Link>
      </div>
    </section>
  );
}