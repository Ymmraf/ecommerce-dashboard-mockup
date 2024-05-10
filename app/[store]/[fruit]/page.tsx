import Breadcrumbs from "@/app/ui/Breadcrumbs";
import capitalizeParams from "@/app/utils/capitalizeParams";
import { fetchProductByName } from "@/app/lib/products";
import { Suspense } from "react";
import { ProductCardSkeleton } from "@/app/ui/Skeleton";
import Image from "next/image";
import Link from "next/link";
import AccordionFruit from "@/app/ui/fruit/Accordion";
import clsx from "clsx";
import Footer from "@/app/ui/Footer";
import Order from "@/app/ui/fruit/Order";

export default async function Fruit({ params }: { params: { fruit: string } }) {
  const fruitName = capitalizeParams(params.fruit);
  const productInfo = (await fetchProductByName(fruitName)).rows[0];

  return (
    <>
      <main className="w-11/12 m-auto">
        <Breadcrumbs nav={["Store", fruitName]} />
        <Link
          href="/store"
          className="text-coal font-semibold text-md opacity-70"
        >
          &lt; To all product
        </Link>
        <h1 className="text-coal text-2xl font-semibold mt-4">{fruitName}</h1>
        <Suspense fallback={<ProductCardSkeleton />}>
          <div className="w-3/5 shadow-lg rounded-full my-12 mx-auto">
            <Image
              className="rounded-full"
              src={productInfo.img}
              alt={productInfo.name}
              width={500}
              height={500}
            />
          </div>
        </Suspense>
        <div className="flex justify-between">
          <div
            className={clsx(
              "font-semibold px-4 py-1 border-2 rounded-lg border-coal border-opacity-50",
              {
                "text-leaf": productInfo.stock,
                "text-tomato": !productInfo.stock,
              }
            )}
          >
            {productInfo.stock ? "In stock ✓" : "Out of stock X"}
          </div>
          <div className="flex items-center">
            <p className="text-coal opacity-70">Delivery: 1-3 business days</p>
          </div>
        </div>
        <div>
          {
            productInfo.stock <= 3 && productInfo.stock > 0 ? 
            <p className="text-tomato font-semibold text-sm pl-3">{productInfo.stock} remaining</p> :
            <p></p>
          }
        </div>
        <article className="my-8">
          <h2 className="text-coal text-xl">Description:</h2>
          <p className="text-coal mt-4 tracking-wide leading-7">
            {productInfo.detail}
          </p>
        </article>
        <div>
          <AccordionFruit
            nutrition={productInfo.nutrition}
            origin={productInfo.origin}
          />
        </div>
      </main>
      <Order
        price={(productInfo.price * (1 - productInfo.discount)).toFixed(2)}
        name={productInfo.name}
        img={productInfo.img}
      />
      <Footer />
    </>
  );
}
