"use client";

import { useAtom } from "jotai";
import { cart } from "@/app/atom/state";
import { getTotalProductPrice } from "@/app/utils/getSum";

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
  const productPrice = getTotalProductPrice(inCart).toFixed(2)

  const currentProductQuantity = (name: string) => {
    const currentProductIndex = inCart.findIndex((product) => product.product == name)
    if(currentProductIndex == -1) {
      return 0
    } else if (currentProductIndex >= 0) {
      return inCart[currentProductIndex].quantity
    }
  }

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
          <div className="text-coal">
            <p className="text-xl font-semibold">Subtotal: ${productPrice}</p>
            <p className="opacity-70">$ {price} / 500g</p>
          </div>
          <div>
            {
              currentProductQuantity(name) == stock ? 
              <button disabled={true} className="font-semibold text-cream bg-leaf py-2 px-4 rounded-lg opacity-60" >
                <div>Add to cart +</div>
              </button>
              :
              <button onClick={() => addToCart({ product: name, price: Number(price), quantity: 1, img: img , stock: stock}) } className="font-semibold text-cream bg-leaf py-2 px-4 rounded-lg hover:scale-105 duration-300">
                <div>Add to cart +</div>
              </button>
            }
          </div>
        </div>
      </div>
    </aside>
  );
}
