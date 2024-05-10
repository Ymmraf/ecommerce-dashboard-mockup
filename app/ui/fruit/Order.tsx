"use client";

import { useAtom } from "jotai";
import { cart } from "@/app/atom/state";
import { getSum } from "@/app/utils/getSum";

interface AddToCart {
  product: string;
  price: number;
  quantity: number;
  img: string,
  stock: number
}

export default function Order({
  price,
  name,
  img,
  stock
}: {
  price: string;
  name: string;
  img: string
  stock: number
}) {
  const [inCart, setInCart] = useAtom(cart);
  const total = getSum(inCart).toFixed(2)

  function addToCart(addToCart: AddToCart) {
    let alreadyInCart = false;
    
    inCart.forEach(product => {
      if(product.product == addToCart.product) {
        alreadyInCart = true
        return
      }
    })

    if(alreadyInCart) {
      setInCart(inCart.map((element,index) => 
        element.product == addToCart.product ? {product: name, price: Number(price), quantity: Number(inCart[index].quantity + 1), img: img, stock: stock } : element
      ))
    } else if (!alreadyInCart) {
      setInCart([...inCart, addToCart]);
    }
  }

  return (
    <aside className="w-full py-2 bg-white sticky bottom-0 mt-8">
      <div className="w-4/5 m-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-coal text-xl font-semibold">Subtotal: ${total}</p>
            <p className="text-coal opacity-70">$ {price} / 500g</p>
          </div>
          <div>
            {
              
            }
            <button
              onClick={() =>
                addToCart({ product: name, price: Number(price), quantity: 1, img: img , stock: stock})
              }
              className="font-semibold text-cream bg-leaf py-2 px-4 rounded-lg"
            >
              <div>Add to cart +</div>
            </button>

          </div>
        </div>
      </div>
    </aside>
  );
}
