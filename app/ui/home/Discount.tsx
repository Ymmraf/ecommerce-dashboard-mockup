'use client'
import Link from "next/link";
import ProductCard from "../ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { getDecimal } from "../../utils/getDecimal";
import { ProductCardSkeleton } from "../Skeleton";
import { Suspense } from "react";
import SwiperPanel from "./SwiperPanel";
import { ProductInfoForCard } from "@/type";
import { QueryResultRow } from "@vercel/postgres";

export default function Discount({discount} : {discount: QueryResultRow[]}) {
  return (
    <section className="w-11/12 m-auto mb-12">
      <div className="flex justify-between text-coal">
        <div className="flex gap-x-3 mb-6 font-semibold">
          <FontAwesomeIcon className="text-3xl" icon={faPercent} />
          <h2 className="text-2xl">Discounted goods</h2>
        </div>
        <Link className="hidden lg:inline text-lg top-1 relative hover:underline" href="/store">View all &gt;</Link>
      </div>
      <Suspense fallback={<ProductCardSkeleton />}>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-4 lg:hidden">
          {discount.slice(0, 4).map((product, index) => {
            return (
              <ProductCard
                key={index}
                name={product.name}
                price={getDecimal(product.price, product.discount)}
                img={`/fruits/${product.name.toLowerCase().replace(' ', '-')}.jpg`}
                rating={product.rating}
                originalPrice={getDecimal(product.price)}
                href={`/store/${product.name.toLowerCase()}`}
              />
            );
          })}
        </div>
      </Suspense>

      <div className="hidden lg:block ">
        <SwiperPanel products={discount} />
      </div>

      <div className="mt-4 text-center text-coal text-lg px-4 py-2 lg:hidden hover:underline">
        <Link href="/store">
          <p>View all &gt;</p>
        </Link>
      </div>
    </section>
  );
}