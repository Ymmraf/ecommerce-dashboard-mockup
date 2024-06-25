"use client";

import { useAtom } from "jotai";
import { cart } from "@/app/atom/state";
import { getTotalProductPrice } from "@/app/utils/getSum";

interface AddToCart {
  productId: number,
  product: string,
  price: number,
  quantity: number,
  img: string,
  stock: number
}

export default function Order({
  productId,
  price,
  name,
  img,
  stock
}: {
  productId: number,
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

  function deleteProductFromCart(productName: string) {
    setInCart(
      inCart.filter((product) => product.product != productName)
    );
  }

  function changeQuantity(addToCart: AddToCart, operator: string) {
    let itemIsAlreadyInCart = false;
    
    inCart.forEach(product => {
      if(product.product == addToCart.product) {
        itemIsAlreadyInCart = true
        return
      }
    })

    if(itemIsAlreadyInCart) {
      if(operator == "+") {
        setInCart(inCart.map((element,index) => 
          element.product == addToCart.product ? {productId : productId, product: name, price: Number(price), quantity: Number(inCart[index].quantity + 1), img: img, stock: stock } : element
        ))
      } else if(operator == "-") {
        if(currentProductQuantity(addToCart.product) == 1) {
          deleteProductFromCart(addToCart.product)
        } else {
          setInCart(inCart.map((element,index) => 
            element.product == addToCart.product ? {productId : productId, product: name, price: Number(price), quantity: Number(inCart[index].quantity - 1), img: img, stock: stock } : element
          ))
        }
      }
    } else if (!itemIsAlreadyInCart) {
      setInCart([...inCart, addToCart]);
    }
  }

  return (
    <aside className="w-full py-2 bg-white mt-8">
      <div className="w-11/12 md:w-4/5 m-auto">
        <div className="flex justify-between items-center">
          <div className="text-coal">
            <p className="text-xl font-semibold">Subtotal: ${productPrice}</p>
            <p className="opacity-70">$ {price} / 500g</p>
          </div>
          <div className="flex gap-x-2">
            <div>
              {
                currentProductQuantity(name) == stock ? 
                <button disabled={true} className="font-semibold text-cream bg-leaf py-2 px-4 rounded-lg opacity-60" >
                  <div>Add to cart</div>
                </button>
                :
                <button onClick={() => changeQuantity({ productId: productId, product: name, price: Number(price), quantity: 1, img: img , stock: stock}, "+") } className="font-semibold text-cream bg-leaf py-2 px-4 rounded-lg hover:scale-105 duration-300">
                  <div>Add to cart</div>
                </button>
              }
            </div>
            <div>
              {
                currentProductQuantity(name) == 0 ?
                <button disabled={true} className="font-semibold text-cream bg-tomato py-2 px-4 rounded-lg opacity-60">
                  -
                </button>
                :
                <button onClick={() => changeQuantity({ productId: productId, product: name, price: Number(price), quantity: 1, img: img , stock: stock}, "-") } className="font-semibold text-cream bg-tomato py-2 px-4 rounded-lg">
                  -
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
