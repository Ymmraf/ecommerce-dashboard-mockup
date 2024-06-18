import Breadcrumbs from "@/app/ui/Breadcrumbs";
import capitalizeParams from "@/app/utils/capitalizeParams";
import { fetchProduct } from "@/app/lib/products";
import React, { Suspense } from "react";
import { ProductCardSkeleton } from "@/app/ui/Skeleton";
import Image from "next/image";
import Link from "next/link";
import AccordionFruit from "@/app/ui/fruit/Accordion";
import clsx from "clsx";
import Footer from "@/app/ui/Footer";
import Order from "@/app/ui/fruit/Order";
import CustomerReview from "@/app/ui/fruit/CustomerReview";
import Recommend from "@/app/ui/fruit/Recommend";

export default async function Fruit({ params }: { params: { fruit: string } }) {
  const fruitName = capitalizeParams(params.fruit);
  const productInfo = (await fetchProduct.productPageByName(fruitName)).rows[0];

  return (
    <>
      <main className="w-11/12 m-auto xl:w-4/6 2xl:w-3/5">
        <div>
          <Breadcrumbs nav={["Store", fruitName]} />
          <Link
            href="/store"
            className="text-coal font-semibold text-md opacity-70 hover:underline"
          >
            &lt; To all product
          </Link>
        </div>
        <div className="lg:grid lg:grid-cols-2">
          <section>
            <h1 className="text-coal text-2xl font-semibold mt-4 lg:hidden">
              {fruitName}
            </h1>
            <Suspense fallback={<ProductCardSkeleton />}>
              <div className="w-3/5 shadow-lg rounded-full my-12 mx-auto">
                <Image
                  className="rounded-full"
                  src={`/fruits/${productInfo.name.toLowerCase().replace(' ', '-')}.jpg`}
                  alt={productInfo.name}
                  width={500}
                  height={500}
                />
              </div>
            </Suspense>
          </section>
          <section>
            <h1 className="hidden text-coal text-4xl font-semibold mt-4 lg:block lg:mb-6">
              {fruitName}
            </h1>
            <div className="flex justify-between lg:justify-start lg:gap-x-6">
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
                <p className="text-coal opacity-70">
                  Delivery: 1-3 business days
                </p>
              </div>
            </div>
            <div>
              {productInfo.stock <= 3 && productInfo.stock > 0 ? (
                <p className="text-tomato font-semibold text-sm pl-3">
                  {productInfo.stock} remaining
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <article className="mt-8 hidden lg:block">
              <h2 className="text-coal text-xl">Description:</h2>
              <p className="text-coal mt-4 tracking-wide leading-7">
                {productInfo.detail}
              </p>
            </article>
            <div className="hidden lg:block">
              <Order
                productId={productInfo.id}
                price={(productInfo.price * (1 - productInfo.discount)).toFixed(2)}
                name={productInfo.name}
                img={`/fruits/${productInfo.name.toLowerCase().replace(' ', '-')}.jpg`}
                stock={productInfo.stock}
              />
            </div>
          </section>
          <section className="lg:hidden">
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
          </section>
        </div>
        <section className="hidden mt-8 lg:block">
          <div>
            <AccordionFruit
              nutrition={productInfo.nutrition}
              origin={productInfo.origin}
            />
          </div>
        </section>
      </main>
      <div className="fixed bottom-0 right-0 left-0 z-30 lg:hidden">
        <Order
          productId={productInfo.id}
          price={(productInfo.price * (1 - productInfo.discount)).toFixed(2)}
          name={productInfo.name}
          img={productInfo.img}
          stock={productInfo.stock}
        />
      </div>
      <aside className="w-11/12 m-auto xl:w-4/6 2xl:w-3/5">
        <CustomerReview rating={productInfo.rating} />
        <Recommend />
      </aside>
      <Footer />
    </>
  );
}
