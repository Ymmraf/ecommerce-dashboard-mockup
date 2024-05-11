import { useAtom } from "jotai";
import { cart } from "../atom/state";
import Image from "next/image";

export default function CheckoutList() {
  const [productInCart, setProductInCart] = useAtom(cart);

  function deleteProductFromCart(productName: string) {
    setProductInCart(
      productInCart.filter((product) => product.product != productName)
    );
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
                  
                  <div className="flex items-center">
                    <p className="min-w-8 text-center">{product.quantity}</p>
                  </div>

                </div>
              </div>
              <div className="flex flex-col justify-between py-1">
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
