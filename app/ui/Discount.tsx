import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { products } from "../lib/products";
import { getDecimal } from "../utils/getDecimal";

export function Discount() {
  return (
    <section className="w-11/12 m-auto mb-12">
      <div className="flex gap-x-3 mb-6">
        <FontAwesomeIcon className="text-coal text-3xl" icon={faPercent} />
        <h2 className="text-coal font-semibold text-2xl">Discounted goods</h2>
      </div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-6">
        {products.map((product, index) => {
          return (
              <DiscountCard
                key={index}
                name={product.name}
                price={getDecimal(product.price, product.discount)}
                img={product.img}
                rating={product.rating}
                originalPrice={getDecimal(product.price)}
              />
          );
        })}
      </div>
      <div className="mt-4">
        <Link href="/" className="text-coal text-lg hover:underline">
          <p className="text-center">View all &gt;</p>
        </Link>
      </div>
    </section>
  );
}

function DiscountCard({
  name,
  price,
  img,
  rating,
  originalPrice
}: {
  name: string;
  price: string;
  img: string;
  rating: number;
  originalPrice: string
}) {
  return (
    <Link
      href="/"
      className="w-full bg-white p-4 rounded-3xl relative duration-300 shadow-sm hover:scale-[1.01] "
    >
      <Image
        className="rounded-full w-20 h-20 absolute top-[-10px] shadow-md"
        src={img}
        alt="product image"
        width={100}
        height={100}
      />
      <div className="flex justify-end mb-4">
        <div className="text-leaf">
          <div className="flex justify-center">
            <FontAwesomeIcon className="text-sm" icon={faStar} />
          </div>
          <p className="font-semibold mt-1">{rating}/5</p>
        </div>
      </div>
      <h3 className="text-coal text-xl mb-4">{name}</h3>
      <div className="flex gap-x-2">
        <p className="font-semibold text-tomato text-lg relative">
          ${price}
        </p>
        <div className="flex items-center">
          <p className="font-regular text-coal text-sm line-through">
            ${originalPrice}
          </p>
        </div>
      </div>
      <p className="text-gray-400 text-sm">/ 500g</p>
    </Link>
  );
}
