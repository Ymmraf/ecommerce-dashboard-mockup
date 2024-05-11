'use client'
import { useAtom } from "jotai";
import { cart } from "../atom/state";
import Breadcrumbs from "../ui/Breadcrumbs";
import { getSum, getTotalFee } from "../utils/getSum";
import CheckoutList from "../ui/CheckoutList";
import DisplayTotal from "../ui/DisplayTotal";

export default function Checkout() {
    const [productInCart] = useAtom(cart);
    const subTotal = getSum(productInCart);
    const deliveryFee = getTotalFee(productInCart);
    const total = subTotal + deliveryFee;
  return (
    <>
      <main className="w-11/12 m-auto">
        <Breadcrumbs nav={["Checkout"]} />
        <h1 className="text-coal text-3xl font-semibold">Checkout</h1>
        <section>
          <section>
            <DisplayTotal subTotal={subTotal} deliveryFee={deliveryFee} total={total}/>
            <hr className="h-1 w-full bg-darkcream" />
            <div className="h-full">
              <CheckoutList />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
