import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAtom } from "jotai";
import { cart } from "../atom/state";
import Image from "next/image";

export default function CartDisplay() {
  const [productInCart, setProductInCart] = useAtom(cart);

  function deleteProductFromCart(productName: string) {
    setProductInCart(
      productInCart.filter((product) => product.product != productName)
    );
  }

  function changeProductQuantity(operator: string, productName: string) {
    if (operator == "+") {
      setProductInCart(
        productInCart.map((item, index) =>
          item.product == productName
            ? {
                product: item.product,
                price: Number(item.price),
                quantity: Number(productInCart[index].quantity + 1),
                img: item.img,
                stock: item.stock
              }
            : item
        )
      );
    } else if (operator == "-") {
      setProductInCart(
        productInCart.map((item, index) =>
          item.product == productName
            ? {
                product: item.product,
                price: Number(item.price),
                quantity: Number(productInCart[index].quantity - 1),
                img: item.img,
                stock: item.stock
              }
            : item
        )
      );
    }
  }

  return (
    <div className="overflow-scroll space-y-3 max-h-full">
      {productInCart.map((product, index) => (
        <div key={index}>
          <div className="h-24 flex gap-x-2 p-2">
            <div className="mr-1">
              <div className="rounded-full">
                <Image
                  className="rounded-full shadow-md min-h-[80px] min-w-[80px]"
                  src={product.img}
                  alt={product.product}
                  width={80}
                  height={80}
                />
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col justify-between py-1">
                <p className="text-coal font-semibold text-lg">
                  {product.product}
                </p>
                <div className="flex items-end min-w-20">
                  {
                    product.quantity == 1 ? 
                    <button 
                        disabled={true}
                        onClick={() => changeProductQuantity("-", product.product)} 
                        className="opacity-30 size-8 border-[1px] border-coal border-opacity-90 text-coal font-bold">
                        -
                    </button>
                    :
                    <button 
                        disabled={false}
                        onClick={() => changeProductQuantity("-", product.product)} 
                        className="size-8 border-[1px] border-coal border-opacity-90 text-coal font-bold hover:text-cream hover:bg-coal duration-300">
                        -
                    </button>
                  }
                  
                  <div className="flex items-center">
                    <p className="min-w-8 text-center">{product.quantity}</p>
                  </div>
                  {
                    product.quantity == product.stock ? 
                    <button 
                        disabled={true}
                        onClick={() => changeProductQuantity("+", product.product)} 
                        className="opacity-30 size-8 border-[1px] border-coal border-opacity-90 text-coal font-bold">
                        +
                    </button> :
                    <button 
                      disabled={false}
                      onClick={() => changeProductQuantity("+", product.product)} 
                      className="size-8 border-[1px] border-coal border-opacity-90 text-coal font-bold hover:text-cream hover:bg-coal duration-300">
                      +
                  </button>
                  }
                </div>
              </div>
              <div className="flex flex-col justify-between py-1">
                <div className="flex justify-end">
                  <button
                    onClick={() => deleteProductFromCart(product.product)}
                    className="text-coal px-2 py-1 hover:bg-darkcream duration-300 rounded-xl"
                  >
                    <FontAwesomeIcon icon={faXmark} className="text-xl" />
                  </button>
                </div>
                <p className="text-coal">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <hr className="w-full h-[2px] bg-darkcream" />
        </div>
      ))}
      <div className="h-[300px]"></div>
    </div>
  );
}
