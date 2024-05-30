"use client";
import { useAtom } from "jotai";
import { cart } from "../atom/state";
import Breadcrumbs from "../ui/Breadcrumbs";
import { getTotalProductPrice, getDeliveryFee } from "../utils/getSum";
import CheckoutList from "../ui/CheckoutList";
import DisplayTotalCheckout from "../ui/checkout/DisplayTotalCheckout";
import Footer from "../ui/Footer";
import { useState } from "react";
import { CartProduct } from "@/type";
import Image from "next/image";

interface CustomerInfomation {
  name: string;
  phone: string;
  email: string;
  country: string;
  town: string;
  street: string;
  postcode: string;
  packaging: string;
  shipping: string;
}

export default function Checkout() {
  const [productInCart] = useAtom(cart);
  const totalProductPrice = getTotalProductPrice(productInCart);
  const deliveryFee = getDeliveryFee(productInCart);
  const totalPrice = totalProductPrice + deliveryFee;

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [town, setTown] = useState("")
  const [street, setStreet] = useState("")
  const [postcode, setPostcode] = useState("")
  const [packaging, setPackaging] = useState("")
  const [shipping, setShipping] = useState("")
  const [payment, setPayment] = useState("")
  
  function submitData(customerInfomation: CustomerInfomation, cart: CartProduct[]) {
    const requestBody = {
      ...customerInfomation,
      order: cart.map(product => {
        return {
          product: product.product,
          price: product.price,
          quantity: product.quantity
        }
      })
    }

    console.log(requestBody)

    fetch('/checkout/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
  }
  
  function handleSubmit() {
    const customerInfomation = {
      name : `${firstName} ${lastName}`,
      phone: phone,
      email: email,
      country: country,
      town: town,
      street: street,
      postcode: postcode,
      packaging: packaging,
      shipping: shipping,
      payment: payment
    }
    return customerInfomation
  }

  function handleClickRadio(choice: string) {
    switch (choice) {
      case 'applePay' :
        setPayment('applePay')
        break
      case 'paypal' : 
        setPayment('paypal')
        break
      case 'card' : 
        setPayment('card')
        break
    }
    console.log(payment)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) : void {
    const {name, value} = event.target
    switch (name) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'phone':
        setPhone(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'country':
        setCountry(value)
        break
      case 'town':
        setTown(value)
        break
      case 'street':
        setStreet(value)
        break
      case 'postcode':
        setPostcode(value)
        break
      case 'packaging':
        setPackaging(value)
        break
      case 'shipping':
        setShipping(value)
        break
    }
  }

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
            totalProductPrice={totalProductPrice}
            deliveryFee={deliveryFee}
            totalPrice={totalPrice}
          />
        </section>
        <section className="my-8">
          <form>
          <div>
            <h2 className="text-coal font-semibold text-xl mb-2">
              Personal information:
            </h2>
            <div className="space-y-6 mb-6 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-x-8 lg:gap-y-8">
              <div>
                <label className="block text-coal font-semibold mb-1" htmlFor="firstName">First name</label>
                <input className="block w-full p-1 rounded-md text-coal" type="text" name="firstName" id="firstName" required={true} onChange={handleChange} value={firstName}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="lastName">Last name</label>
                <input className="block w-full p-1 rounded-md text-coal" type="text" name="lastName" id="lastName" required={true} onChange={handleChange} value={lastName}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="phone">Phone</label>
                <input className="block w-full p-1 rounded-md text-coal" type="tel" name="phone" id="phone" required={true} onChange={handleChange} value={phone}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="email">Email</label>
                <input className="block w-full p-1 rounded-md text-coal" type="email" name="email" id="email" required={true} onChange={handleChange} value={email}/>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-coal font-semibold text-xl mb-2">
              Delivery details:
            </h2>
            <div className="space-y-6 mb-6 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-x-8 lg:gap-y-8">
              <div>
                <label className="block text-coal font-semibold mb-1" htmlFor="country">Country / Region</label>
                <input className="block w-full p-1 rounded-md text-coal" type="text" name="country" id="country" required={true} onChange={handleChange} value={country}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="town">Town / City</label>
                <input className="block w-full p-1 rounded-md text-coal" type="text" name="town" id="town" required={true} onChange={handleChange} value={town}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="street">Street</label>
                <input className="block w-full p-1 rounded-md text-coal" type="tel" name="street" id="street" required={true} onChange={handleChange} value={street}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="postcode">Postcode</label>
                <input className="block w-full p-1 rounded-md text-coal" type="number" name="postcode" id="postcode" required={true} onChange={handleChange} value={postcode}/>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="packaging">Packaging type</label>
                <select className="block w-full p-1 rounded-md text-coal" name="packaging" id="packaging" required={true} onChange={handleChange} value={packaging}>
                  <option value="" disabled>Please select packaging type</option>
                  <option value="cardboard">Cardboard</option>
                  <option value="bioplastic">Bioplastic</option>
                </select>
              </div>
              <div className="">
                <label className="block text-coal font-semibold mb-1" htmlFor="shipping">Shipping option</label>
                <select className="block w-full p-1 rounded-md text-coal" name="shipping" id="shipping" required={true} onChange={handleChange} value={shipping}>
                  <option value="" disabled>Please select shipping method</option>
                  <option value="courier">By courier</option>
                  <option value="self">Self-serve</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-coal font-semibold text-xl mb-2">
              Payment
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex mt-4 justify-between">
                <div className="flex relative">
                <label htmlFor="applePay" className="text-cream absolute z-10 font-semibold cursor-pointer left-[6px]">✓</label>
                <input onClick={() => handleClickRadio('applePay')} className="size-6 mr-2 text-leaf relative appearance-none bg-cream border-coal border-2 rounded-md checked:bg-leaf cursor-pointer" type="radio" name="payment" id="applePay"/>
                <label className="text-coal font-semibold mb-1 cursor-pointer" htmlFor="applePay">Apple Pay</label>
                </div>
                <div className="h-6">
                  <Image 
                    className="h-full w-full"
                    src="/applepay.webp"
                    alt="applypay logo"
                    width={80}
                    height={60}
                  />
                </div>
              </div>
              <hr className="h-[2px] w-full bg-darkcream"/>
              <div className="flex justify-between">
                <div className="flex relative">
                <label htmlFor="paypal" className="text-cream absolute z-10 font-semibold cursor-pointer left-[6px]">✓</label>
                <input onClick={() => handleClickRadio('paypal')} className="size-6 mr-2 text-leaf relative appearance-none bg-cream border-coal border-2 rounded-md checked:bg-leaf cursor-pointer" type="radio" name="payment" id="paypal"/>
                <label className="text-coal font-semibold mb-1 cursor-pointer" htmlFor="paypal">Paypal</label>
                </div>
                <div className="h-6">
                  <Image 
                    className=""
                    src="/paypal.png"
                    alt="paypal logo"
                    width={80}
                    height={60}
                  />
                </div>
              </div>
              <hr className="h-[2px] w-full bg-darkcream"/>
              <div className="flex justify-between">
                <div className="flex relative">
                <label htmlFor="card" className="text-cream absolute z-10 font-semibold cursor-pointer left-[6px]">✓</label>
                <input onClick={() => handleClickRadio('card')} className="size-6 mr-2 text-leaf relative appearance-none bg-cream border-coal border-2 rounded-md checked:bg-leaf cursor-pointer" type="radio" name="payment" id="card"/>
                <label className="text-coal font-semibold mb-1 cursor-pointer" htmlFor="card">Credit or Debit Card</label>
                </div>
                <div className="flex gap-x-2">
                  <div className="h-8">
                    <Image 
                      className="h-full w-full"
                      src="/visa.png"
                      alt="visa logo"
                      width={80}
                      height={60}
                    />
                  </div>
                  <div className="h-8">
                    <Image 
                      className="h-full w-full"
                      src="/mastercard.png"
                      alt="mastercard logo"
                      width={80}
                      height={60}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </form>
          <div className="flex justify-center">
            <button className="text-cream bg-leaf font-semibold py-2 px-20 hover:scale-105 duration-300 rounded-lg" onClick={() => submitData(handleSubmit(), productInCart)}>Purchase</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
