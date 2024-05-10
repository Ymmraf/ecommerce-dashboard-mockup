import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({
    name,
    price,
    img,
    rating,
    originalPrice,
    href
  }: {
    name: string;
    price: string;
    img: string;
    rating: number;
    originalPrice: string,
    href: string
  }) {
    return (
      <Link
        href={href}
        className="w-full bg-white p-4 rounded-3xl relative duration-300 shadow-sm hover:scale-[1.01] "
      >
        <Image
          className="rounded-full w-20 h-20 absolute top-[-10px] shadow-md z-10"
          src={img}
          alt="product image"
          width={100}
          height={100}
        />

        <DiscountText price={price} originalPrice={originalPrice}/>

        <div className="flex justify-end mb-8">
          <div className="text-leaf">
            <div className="flex justify-center">
              <FontAwesomeIcon className="text-sm" icon={faStar} />
            </div>
            <p className="font-semibold mt-1">{rating}/5</p>
          </div>
        </div>
        <h3 className="text-coal text-xl mb-4">{name}</h3>

        <CardPrice price={price} originalPrice={originalPrice}/>

        <p className="text-gray-400 text-sm">/ 500g</p>
      </Link>
    );
  }

function CardPrice({price, originalPrice}:{price:string,originalPrice:string}) {
    if (price == originalPrice) {
        return (
        <div className="flex gap-x-2">
          <p className="font-semibold text-coal text-lg">
              ${originalPrice}
            </p>
        </div>
        )
    } else {
        return (
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
        )
    }
}

function DiscountText({price, originalPrice}:{price:string,originalPrice:string}) {
    if (price == originalPrice) {
        return 
    } else {
        return (
            <div>
                <p className="bg-tomato text-cream inline z-20 absolute text-[12px] font-semibold px-2 py-1 rounded-lg top-12 left-4 rotate-12">ON SALE</p>
            </div>
        )
    }
}