import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { getDecimal } from "../../utils/getDecimal";
import Link from "next/link";
import ProductCard from "../ProductCard";

export default function Recent({recent} : {recent: any[]}) {
  return (
    <>
      <section className="w-11/12 m-auto">
        <div className="flex gap-x-3 mb-6">
          <FontAwesomeIcon className="text-coal text-3xl" icon={faStore} />
          <h2 className="text-coal font-semibold text-2xl">New additions</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-4">
          {
            recent.slice(0,4).map((product,index) => 
              <ProductCard 
                key={index}
                name={product.name}
                price={getDecimal(product.price, product.discount)}
                img={product.img}
                rating={product.rating}
                originalPrice={getDecimal(product.price)}
                href={product.href}
              />
            )
          }
        </div>
        <div className="mt-4">
        <Link href="/store" className="text-coal text-lg hover:underline">
          <p className="text-center px-4 py-2">View all &gt;</p>
        </Link>
      </div>
      </section>
    </>
  );
}
