import { fetchProduct } from "@/app/lib/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import StockSkeleton from "@/app/ui/dashboard/StockLoading";
import StockSearch from "@/app/ui/dashboard/StockSearch";
import SearchSkeleton from "@/app/ui/dashboard/SearchSkeleton";

export const dynamicParams = true
export const revalidate = 0
export const dynamic = 'force-dynamic'
export const fetchCache = 'default-no-store'
export default async function Stock({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || ''
  const allStock = (await fetchProduct.stock(query)).rows;

  return (
    <>
      <h1 className="ml-8 mt-8 text-coal font-semibold text-4xl">
        Products management
      </h1>
      <Suspense fallback={<SearchSkeleton/>}>
        <div>
          <StockSearch />
        </div>
      </Suspense>

      <div className="w-11/12 m-auto space-y-4">
        <div className="h-12 p-2 bg-leaf rounded-lg grid grid-cols-3 text-cream font-bold text-lg mb-2">
          <div className="flex">
            <div className="w-20"></div>
            <p>Name</p>
          </div>
          <div className="flex justify-between">
            <p>Stock</p>
            <p>Price</p>
          </div>
          <div></div>
        </div>
      </div>

      <Suspense fallback={<StockSkeleton />}>
        <div className="w-11/12 m-auto space-y-2 pb-4">
          {allStock.map((product, index) => (
            <div
              key={index}
              className="h-20 p-2 bg-white rounded-lg grid grid-cols-3 text-coal"
            >
              <div className="flex items-center">
                <Image
                  className="size-16 rounded-full"
                  src={`/fruits/${product.name
                    .toLowerCase()
                    .replace(" ", "-")}.jpg`}
                  alt="product"
                  width={100}
                  height={100}
                />
                <h2 className="text-lg ml-4">{product.name}</h2>
              </div>
              <div className="flex items-center justify-between">
                <p>{product.stock}</p>
                <p>${product.price}</p>
              </div>
              <div className="flex items-center justify-end">
                <Link
                  href={`/dashboard/product/${product.name.toLowerCase()}`}
                  className="text-white bg-leaf text-lg p-3 rounded-lg"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </>
  );
}
