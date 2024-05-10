'use client'

import { useAtom } from "jotai";
import { cart } from "@/app/atom/state";

export default function Order({ price, name }: { price: string, name: string }) {
  const [inCart, setInCart] = useAtom(cart)

  function addToCart(addToCart: any) {
    console.log(addToCart)
  }

  return (
    <aside className="w-full py-2 bg-white sticky bottom-0 mt-8">
      <div className="w-4/5 m-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-coal text-xl font-semibold">Total: ${}</p>
            <p className="text-coal opacity-70">$ {price} / 500g</p>
          </div>
          <div>
            <button onClick={() => addToCart({product: name, price: Number(price)})} className="font-semibold text-cream bg-leaf py-2 px-4 rounded-lg">
                <div>
                    Add to cart +
                </div>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
