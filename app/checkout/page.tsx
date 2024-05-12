"use client";
import { useAtom } from "jotai";
import { cart } from "../atom/state";
import Breadcrumbs from "../ui/Breadcrumbs";
import { getSum, getTotalFee } from "../utils/getSum";
import CheckoutList from "../ui/CheckoutList";
import DisplayTotalCheckout from "../ui/checkout/DisplayTotalCheckout";
import Footer from "../ui/Footer";
import { submitForm } from "./submit";

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
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-coal mb-4">Your Order</h2>
          <div className="h-full">
            <CheckoutList />
          </div>
          <DisplayTotalCheckout
            subTotal={subTotal}
            deliveryFee={deliveryFee}
            total={total}
          />
        </section>
        <section className="my-8">
          <form action={submitForm}>
          <div>
            <h2 className="text-coal font-semibold text-xl mb-2">
              Personal information:
            </h2>
            <div className="space-y-6 mb-6">
              <div>
                <label className="block text-coal font-semibold mb-1" htmlFor="firstName">First name</label>
                <input className="block w-full p-1 rounded-md ring-leaf text-coal" type="text" name="firstName" id="firstName" required={true}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="lastName">Last name</label>
                <input className="block w-full p-1 rounded-md ring-leaf text-coal" type="text" name="lastName" id="lastName" required={true}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="phone">Phone</label>
                <input className="block w-full p-1 rounded-md ring-leaf text-coal" type="tel" name="phone" id="phone" required={true}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="email">Email</label>
                <input className="block w-full p-1 rounded-md ring-leaf text-coal" type="email" name="email" id="email" required={true}/>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-coal font-semibold text-xl mb-2">
              Delivery details:
            </h2>
            <div className="space-y-6 mb-6">
              <div>
                <label className="block text-coal font-semibold mb-1" htmlFor="country">Country / Region</label>
                <input className="block w-full p-1 rounded-md ring-leaf text-coal" type="text" name="country" id="country" required={true}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="Town">Town / City</label>
                <input className="block w-full p-1 rounded-md ring-leaf text-coal" type="text" name="Town" id="Town" required={true}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="street">Street</label>
                <input className="block w-full p-1 rounded-md ring-leaf text-coal" type="tel" name="street" id="street" required={true}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="postcode">Postcode</label>
                <input className="block w-full p-1 rounded-md ring-leaf text-coal" type="number" name="postcode" id="postcode" required={true}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="package">Packaging type</label>
                <input className="block w-full p-1 rounded-md ring-leaf text-coal" type="text" name="package" id="package" required={true}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="shipping">Shipping option</label>
                <input className="block w-full p-1 rounded-md ring-leaf text-coal" type="text" name="shipping" id="shipping" required={true}/>
              </div>
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
