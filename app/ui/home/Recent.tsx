import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { getDecimal } from "../../utils/getDecimal";
import Link from "next/link";
import ProductCard from "../ProductCard";
import { ProductInfoForCard } from "@/type";
import SwiperPanel from "./SwiperPanel";
import { QueryResultRow } from "@vercel/postgres";

export default function Recent({ recent }: { recent: QueryResultRow[] }) {
  return (
    <>
      <section className="w-11/12 m-auto">

        <div className="flex justify-between text-coal">
          <div className="flex gap-x-3 mb-6 font-semibold">
            <FontAwesomeIcon className="text-3xl" icon={faStore} />
            <h2 className="text-2xl">New additions</h2>
          </div>
          <Link
            className="hidden lg:inline text-lg top-1 relative hover:underline"
            href="/store"
          >
            View all &gt;
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-4 lg:hidden">
          {recent.slice(0, 4).map((product, index) => (
            <div key={`${product.name}-${product.index}`}>
              <ProductCard
                name={product.name}
                price={getDecimal(product.price, product.discount)}
                img={`/fruits/${product.name.toLowerCase().replace(' ', '-')}.jpg`}
                rating={product.rating}
                originalPrice={getDecimal(product.price)}
                href={`/store/${product.name.toLowerCase()}`}
              />
            </div>
          ))}
        </div>

        <div className="hidden lg:block ">
          <SwiperPanel section={"new-addition"} products={recent} />
        </div>

        <div className="mt-4">
          <div className="mt-4 text-center text-coal text-lg px-4 py-2 lg:hidden hover:underline">
            <Link href="/store">
              <p>View all &gt;</p>
            </Link>
          </div>
        </div>

      </section>
    </>
  );
}
